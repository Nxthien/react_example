class AddNumberToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :number, :integer
  end
end
