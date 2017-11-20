require 'open-uri'
require 'json'
require 'pry'

class LongestController < ApplicationController
  def game
    @res = generate_grid(9)
    @start_time = Time.now.to_i
    session[:score] = [] unless session[:score]
  end

  def score
    @end_time = Time.now.to_i
    @start_time = params["time"]
    @res = run_game(params["mygrid"], params["grid"])
    session[:score] << @res[:score]

  end

  def generate_grid(grid_size)
    result = []
    grid_size.times { result << ("A".."Z").to_a.sample }
    result
  end

  def run_game(attempt, grid)
    reponse = JSON.parse(open("https://wagon-dictionary.herokuapp.com/#{attempt}").read)
    return { score: 0, message: "not an english word" } unless reponse["found"]
    return { score: 0, message: "not in the grid" } unless test_grid(attempt, grid)
    { score: (attempt.size * 1000 / (@end_time - @start_time.to_i)), message: "well done" }
  end

  def test_grid(attempt, grid)
    grid_h = {}
    grid.split('').each { |a| grid_h.key?(a) ? grid_h[a] += 1 : grid_h[a] = 1 }
    attempt.upcase.split('').each { |letter| grid_h.key?(letter) ? grid_h[letter] -= 1 : (return false) }
    grid_h.each_value { |v| return false if v < 0 }
    return true
  end

end
