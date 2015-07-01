# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Student.delete_all
s1 = Student.create!(name: 'Mathilda Thompson', twitter: '@mathildathompson', phone_number: '0876543219', email: 'mathildaathompson288@gmail.com', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, corporis.')
s2 = Student.create!(name: 'Lara Thompson', twitter: '@larathompson', phone_number: '0876543219', email: 'lara thompson288@gmail.com', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, corporis.')
