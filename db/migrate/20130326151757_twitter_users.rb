class TwitterUsers < ActiveRecord::Migration
  def change
    create_table :twitter_users do |t|
      t.string :username
      t.string :access_token
      t.string :access_secret

      t.timestamps
    end
  end
end
