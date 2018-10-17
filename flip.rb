print 'Enter your n number: '
num = gets.chomp.to_i

def flip(num)
  numbers = (0...num).to_a.reverse!
  numbers[rand(num)]
end

puts flip(num)
