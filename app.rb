require 'sinatra'
require './config.rb'

get '/' do
  erb :index, :layout => false
end



