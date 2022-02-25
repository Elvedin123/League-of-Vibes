class User < ApplicationRecord
  has_many :teams
  has_many :comments
end
