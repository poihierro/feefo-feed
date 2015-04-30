require 'net/https'
require 'json'
 
# Forecast API Key from https://developer.forecast.io
# forecast_api_key = ""
 
# Latitude, Longitude for location
# forecast_location_lat = "45.429522"
# forecast_location_long = "-75.689613"
 
# Unit Format
# "us" - U.S. Imperial
# "si" - International System of Units
# "uk" - SI w. windSpeed in mph
# forecast_units = "si"
  
SCHEDULER.every '5m', :first_in => 0 do |job|
  http = Net::HTTP.new("jsonp.afeld.me", 443)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_PEER
  response = http.request(Net::HTTP::Get.new("?url=http%3A%2F%2Fwww.feefo.com%2Ffeefo%2Fxmlfeed.jsp%3Flogon%3Dwww.aaetravel.com%2FSG%26json%3Dtrue"))
  forecast = JSON.parse(response.body)  
  forecast_current_temp = forecast["FEEDBACKLIST"]["SUMMARY"]["AVERAGE"]
  forecast_hour_summary = forecast["FEEDBACKLIST"]["SUMMARY"]["COUNT"]
  send_event('forecast', { temperature: "#{forecast_current_temp}&deg;", hour: "#{forecast_hour_summary}"})
end