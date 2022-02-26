class AddUsernameToTeams < ActiveRecord::Migration[7.0]
  def change
    add_column :teams, :username, :string
  end
end
