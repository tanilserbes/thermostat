require 'sinatra/base'
class Thermostat < Sinatra::Base 
  
  get '/' do
    'hello world'
  end

  run if app_file == $0
end