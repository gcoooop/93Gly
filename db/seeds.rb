# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

User.create( username: "earthling365", email: "earthling365@gmail.com", password: "password")
User.create( username: "martian687", email: "martian687@gmail.com", password: "password")

post = Post.create(title: "Tre Cime di Lavaredo Mountains with Milky Way", caption: "Photo credit to DreamyPixel", photographer_id: 1)
file = File.open('app/assets/images/Tre-Cime-di-Lavaredo-mountains-with-Milky-Way.jpg')
post.photo.attach(io: file, filename: 'Tre-Cime-di-Lavaredo-mountains-with-Milky-Way.jpg')
# post.photo.attached?