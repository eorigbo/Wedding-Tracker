class WeddingPlannerMailer < Devise::Mailer
  helper :application # gives access to all helpers defined within `application_helper`.
  include Devise::Controllers::UrlHelpers # Optional. eg. `confirmation_url`
  default template_path: 'devise/mailer' # to make sure that you mailer uses the devise views

  def confirmation_instructions(record, token, opts={})
    if record.first_name.present?
      opts[:subject] = "Welcome #{record.first_name}, please confirm your email address"
    else
      opts[:subject] = "Please confirm your email address"
    end

    super
  end

end