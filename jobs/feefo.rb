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
  http = Net::HTTP.new("www.feefo.com", 443)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_PEER
  response = http.request(Net::HTTP::Get.new("/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true"))
  feefo = JSON.parse(response.body)  
  forecast_current_temp = feefo["FEEDBACKLIST"]["SUMMARY"]["AVERAGE"]
  forecast_hour_summary = feefo["FEEDBACKLIST"]["SUMMARY"]["COUNT"]
  send_event('feefo', { temperature: "#{forecast_current_temp}", hour: "#{forecast_hour_summary} users so far"})
end