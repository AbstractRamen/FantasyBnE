# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all!

user1 = user.create(email: 'adventurer@dream.brave', name: 'Brave adventurer', password: 123456)
user2 = user.create(email: 'wukong@best.mountain', name: 'Sun Wukong', password: 123456)
user3 = user.create(email: 'admin@hogwartz.edu', name: 'Albus Dumbledore ', password: 123456)
user4 = user.create(email: 'tim@icloud.com', name: 'Time Cook', password: 123456)
user5 = user.create(email: 'hiro@sanfransokyo.com', name: 'Hiro Hamada', password: 123456)
user6 = user.create(email: 'xuangdi@first.emperorer', name: 'Shi Huangdi', password: 123456)
user7 = user.create(email: 'brycehoward@famous.actress', name: 'Bryce Dallas Howard', password: 123456)
