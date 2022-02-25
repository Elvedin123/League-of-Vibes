class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :champ1_img
      t.string :champ2_img
      t.string :champ3_img
      t.string :champ4_img
      t.string :champ5_img
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
