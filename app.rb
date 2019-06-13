require 'sinatra/base'

class Temperature < Sinatra::Base
  enable :sessions

  get '/temperature' do
    '24'
  end

  run! if app_file == $0
end