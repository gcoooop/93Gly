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
file = open('http://93gly-seeds.s3.amazonaws.com/dumbbell_nebula.PNG')
post.photo.attach(io: file, filename: "dumbbell_nebula.PNG")

post = Post.create!(title: "M2", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('http://93gly-seeds.s3.amazonaws.com/M2.PNG')
post.photo.attach(io: file, filename: "M2.PNG")

post = Post.create!(title: "Crab Nebula", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('http://93gly-seeds.s3.amazonaws.com/crab_nebula.PNG')
post.photo.attach(io: file, filename: "crab_nebula.PNG")

post = Post.create!(title: "Bode's Galaxy", caption: "Photo credit to gcoooop", photographer_id: gcoooop.id)
file = open('http://93gly-seeds.s3.amazonaws.com/bodes_galaxy.PNG')
post.photo.attach(io: file, filename: "bodes_galaxy.PNG")

post = Post.create!(title: "Bubble Nebula", caption: "Photo credit to u/firemandan666", photographer_id: earthling.id)
file = open('http://93gly-seeds.s3.amazonaws.com/bubble_nebula.jpg')
post.photo.attach(io: file, filename: "bubble_nebula.jpg")

post = Post.create!(title: "Fighting Dragons of Ara", caption: "Photo credit to u/OkeWoke", photographer_id: earthling.id)
file = open('http://93gly-seeds.s3.amazonaws.com/fighting_dragons_of_ara.jpg')
post.photo.attach(io: file, filename: "fighting_dragons_of_ara.jpg")

post = Post.create!(title: "Bubble Nebula", caption: "Photo credit to u/firemandan666", photographer_id: earthling.id)
file = open('http://93gly-seeds.s3.amazonaws.com/bubble_nebula.jpg')
post.photo.attach(io: file, filename: "bubble_nebula.jpg")

post = Post.create!(title: "California Nebula", caption: "Photo credit to u/CosmicWreckingBall", photographer_id: martian.id)
file = open('http://93gly-seeds.s3.amazonaws.com/california_nebula.jpg')
post.photo.attach(io: file, filename: "california_nebula.jpg")

post = Post.create!(title: "Andromeda Galaxy", caption: "Photo credit to u/KBALLZZ", photographer_id: martian.id)
file = open('http://93gly-seeds.s3.amazonaws.com/andromeda_galaxy.jpg')
post.photo.attach(io: file, filename: "andromeda_galaxy.jpg")

post = Post.create!(title: "Orion Nebula", caption: "Photo credit to u/_indeed_", photographer_id: dave.id)
file = open('http://93gly-seeds.s3.amazonaws.com/orion_nebula.jpg')
post.photo.attach(io: file, filename: "orion_nebula.jpg")

post = Post.create!(title: "Tarantula Nebula", caption: "Photo credit to u/Windston57", photographer_id: dave.id)
file = open('http://93gly-seeds.s3.amazonaws.com/tarantula_nebula.jpg')
post.photo.attach(io: file, filename: "tarantula_nebula.jpg")

post = Post.create!(title: "Helix Nebula", caption: "Photo credit to u/joshborup", photographer_id: dave.id)
file = open('http://93gly-seeds.s3.amazonaws.com/helix_nebula.jpg')
post.photo.attach(io: file, filename: "helix_nebula.jpg")

post = Post.create!(title: "Eastern Veil Nebula", caption: "Photo credit to u/Scaletto", photographer_id: hal.id)
file = open('http://93gly-seeds.s3.amazonaws.com/veil_nebula.png')
post.photo.attach(io: file, filename: "veil_nebula.png")

post = Post.create!(title: "Wizard Nebula", caption: "Photo credit to u/japzz", photographer_id: hal.id)
file = open('http://93gly-seeds.s3.amazonaws.com/wizard_nebula.jpg')
post.photo.attach(io: file, filename: "wizard_nebula.jpg")

post = Post.create!(title: "Wizard Nebula", caption: "Photo credit to u/japzz", photographer_id: hal.id)
file = open('http://93gly-seeds.s3.amazonaws.com/wizard_nebula.jpg')
post.photo.attach(io: file, filename: "wizard_nebula.jpg")