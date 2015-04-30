buzzwords = ['Paradigm shift', 'Leverage', 'Pivoting', 'Turn-key', 'Streamlininess', 'Exit strategy', 'Synergy', 'Enterprise', 'Web 2.0'] 
buzzword_counts = Hash.new({ value: 0 })

SCHEDULER.every '2s' do
  random_buzzword = buzzwords.sample
  buzzword_counts[random_buzzword] = { label: random_buzzword, label: (buzzword_counts[random_buzzword][:value] + 1) % 30 }
  
  send_event('buzzwords', { items: buzzword_counts.values })
end


# SCHEDULER.every '2s' do
#   http = Net::HTTP.new("www.feefo.com", 443)
#   http.use_ssl = true
#   http.verify_mode = OpenSSL::SSL::VERIFY_PEER
#   response = http.request(Net::HTTP::Get.new("/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true"))
#   multi_comments = JSON.parse(response.body)  
#   multi_customer_comment = multi_comments["FEEDBACKLIST"]["FEEDBACK"]["CUSTOMERCOMMENT"]
#   send_event('multi_comments', { items: "#{customer_comments})
# end