# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    # validates_presence_of :email, :message => 'Please enter a valid email address.'
    validates :session_token, :email, presence: true, uniqueness: true
    # validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true 

    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    has_many :recipes,
        class_name: :Recipe,
        foreign_key: :author_id
    has_many :saves,
        class_name: :Save,
        foreign_key: :user_id, 
        dependent: :destroy
    has_many :saved_recipes,
        through: :saves,
        source: :recipe
    has_many :comments, 
        dependent: :destroy,
        foreign_key: :author_id,
        class_name: :Comment
end