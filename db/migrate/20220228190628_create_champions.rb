class CreateChampions < ActiveRecord::Migration[7.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :lore
      t.string :img
      t.string :role
      t.string :lane

      t.timestamps
    end
  end
end
