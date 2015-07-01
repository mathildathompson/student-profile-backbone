# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

# Although this is not needed for an api-only application, rails4 
# requires secret_key_base or secret_token to be defined, otherwise an 
# error is raised.
# Using secret_token for rails3 compatibility. Change to secret_key_base
# to avoid deprecation warning.
# Can be safely removed in a rails3 api-only application.
StudentProfileServer::Application.config.secret_token = 'e81e2b51ae7052a7ebc39f57615c5551b8ae2fc20347eb5d0e0ef612e900cec0b4d3a1f18d8033881c2dfaa065780ef93d1e8bafe5d7a6bbead81f39e8d71f0c'
