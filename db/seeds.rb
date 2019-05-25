# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all

gcoooop = User.create!( username: "gcoooop", email: "gcoooop@gmail.com", password: "password")
earthling = User.create!( username: "earthling365", email: "earthling365@gmail.com", password: "password")
martian = User.create!( username: "martian687", email: "martian687@gmail.com", password: "password")
dave = User.create!( username: "ImSorryDaveImAfraidICantDoThat", email: "dave@gmail.com", password: "password")
hal = User.create!( username: "HAL9000", email: "HAL9000@gmail.com", password: "password")


post = Post.create!(title: "Dumbbell Nebula", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/dumbbell_nebula.PNG')
post.photo.attach(io: file, filename: "dumbbell_nebula.PNG")

post = Post.create!(title: "M2", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/M2.PNG')
post.photo.attach(io: file, filename: "M2.PNG")

post = Post.create!(title: "Crab Nebula", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/crab_nebula.PNG')
post.photo.attach(io: file, filename: "crab_nebula.PNG")

post = Post.create!(title: "Bode's Galaxy", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/bodes_galaxy.PNG')
post.photo.attach(io: file, filename: "bodes_galaxy.PNG")

post = Post.create!(title: "Bubble Nebula", caption: "Photo credit to u/firemandan666", photographer_id: earthling.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/bubble_nebula.jpg')
post.photo.attach(io: file, filename: "bubble_nebula.jpg")

post = Post.create!(title: "Fighting Dragons of Ara", caption: "Photo credit to u/OkeWoke", photographer_id: earthling.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/fighting_dragons_of_ara.jpg')
post.photo.attach(io: file, filename: "fighting_dragons_of_ara.jpg")

post = Post.create!(title: "Hidden Galaxy", caption: "Photo credit to u/burscikas", photographer_id: earthling.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/hidden_galaxy.png')
post.photo.attach(io: file, filename: "hidden_galaxy.png")

post = Post.create!(title: "Orion Nebula", caption: "Photo credit to u/_indeed_", photographer_id: dave.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/orion_nebula.jpg')
post.photo.attach(io: file, filename: "orion_nebula.jpg")

post = Post.create!(title: "Tarantula Nebula", caption: "Photo credit to u/Windston57", photographer_id: dave.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/tarantula_nebula.jpg')
post.photo.attach(io: file, filename: "tarantula_nebula.jpg")

post = Post.create!(title: "Eastern Veil Nebula", caption: "Photo credit to u/Scaletto", photographer_id: hal.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/veil_nebula.png')
post.photo.attach(io: file, filename: "veil_nebula.png")

post = Post.create!(title: "Wizard Nebula", caption: "Photo credit to u/japzz", photographer_id: hal.id)
file = open('https://s3-us-west-1.amazonaws.com/93gly-seeds/wizard_nebula.jpg')
post.photo.attach(io: file, filename: "wizard_nebula.jpg")