class WelcomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
  end
  
  def testalert
    #flash[:success] = 'Just testing the alert.'
  end
end
