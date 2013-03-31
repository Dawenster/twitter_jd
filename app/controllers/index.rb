get '/' do
  @session = session[:token]
  erb :index
end

post '/tweet/new' do
  tweet = client.update(params[:text])
  if tweet
    tweet.text
  else
    status 500
    "NOTHING"
  end
end

get '/login/twitter' do
  redirect request_token.authorize_url
end

get '/auth' do
  get_access_token
  @session = session[:token]
  erb :index
end

