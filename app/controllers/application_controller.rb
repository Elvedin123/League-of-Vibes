class ApplicationController < ActionController::API
  has_secure_password


  validates :password, length: { minimum: 6 }

end
