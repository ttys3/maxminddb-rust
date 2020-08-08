var searchIndex = JSON.parse('{\
"maxminddb":{"doc":"","i":[[3,"Metadata","maxminddb","",null,null],[12,"binary_format_major_version","","",0,null],[12,"binary_format_minor_version","","",0,null],[12,"build_epoch","","",0,null],[12,"database_type","","",0,null],[12,"description","","",0,null],[12,"ip_version","","",0,null],[12,"languages","","",0,null],[12,"node_count","","",0,null],[12,"record_size","","",0,null],[3,"Reader","","A reader for the MaxMind DB format. The lifetime `\'data`…",null,null],[12,"metadata","","",1,null],[4,"MaxMindDBError","","",null,null],[13,"AddressNotFoundError","","",2,null],[13,"InvalidDatabaseError","","",2,null],[13,"IoError","","",2,null],[13,"MapError","","",2,null],[13,"DecodingError","","",2,null],[0,"geoip2","","",null,null],[3,"Country","maxminddb::geoip2","GeoIP2 Country record",null,null],[12,"continent","","",3,null],[12,"country","","",3,null],[12,"registered_country","","",3,null],[12,"represented_country","","",3,null],[12,"traits","","",3,null],[3,"City","","GeoIP2 City record",null,null],[12,"city","","",4,null],[12,"continent","","",4,null],[12,"country","","",4,null],[12,"location","","",4,null],[12,"postal","","",4,null],[12,"registered_country","","",4,null],[12,"represented_country","","",4,null],[12,"subdivisions","","",4,null],[12,"traits","","",4,null],[3,"Isp","","GeoIP2 ISP record",null,null],[12,"autonomous_system_number","","",5,null],[12,"autonomous_system_organization","","",5,null],[12,"isp","","",5,null],[12,"organization","","",5,null],[3,"ConnectionType","","GeoIP2 Connection-Type record",null,null],[12,"connection_type","","",6,null],[3,"AnonymousIp","","GeoIP2 Anonymous Ip record",null,null],[12,"is_anonymous","","",7,null],[12,"is_anonymous_vpn","","",7,null],[12,"is_hosting_provider","","",7,null],[12,"is_public_proxy","","",7,null],[12,"is_tor_exit_node","","",7,null],[3,"DensityIncome","","GeoIP2 DensityIncome record",null,null],[12,"average_income","","",8,null],[12,"population_density","","",8,null],[3,"Domain","","GeoIP2 Domain record",null,null],[12,"domain","","",9,null],[3,"Asn","","GeoIP2 Asn record",null,null],[12,"autonomous_system_number","","",10,null],[12,"autonomous_system_organization","","",10,null],[0,"model","","",null,null],[3,"City","maxminddb::geoip2::model","",null,null],[12,"geoname_id","","",11,null],[12,"names","","",11,null],[3,"Continent","","",null,null],[12,"code","","",12,null],[12,"geoname_id","","",12,null],[12,"names","","",12,null],[3,"Country","","",null,null],[12,"geoname_id","","",13,null],[12,"is_in_european_union","","",13,null],[12,"iso_code","","",13,null],[12,"names","","",13,null],[3,"Location","","",null,null],[12,"latitude","","",14,null],[12,"longitude","","",14,null],[12,"metro_code","","",14,null],[12,"time_zone","","",14,null],[3,"Postal","","",null,null],[12,"code","","",15,null],[3,"RepresentedCountry","","",null,null],[12,"geoname_id","","",16,null],[12,"iso_code","","",16,null],[12,"names","","",16,null],[3,"Subdivision","","",null,null],[12,"geoname_id","","",17,null],[12,"iso_code","","",17,null],[12,"names","","",17,null],[3,"Traits","","",null,null],[12,"is_anonymous_proxy","","",18,null],[12,"is_satellite_provider","","",18,null],[11,"open_readfile","maxminddb","Open a MaxMind DB database file by loading it into memory.",1,[[["path",3],["asref",8]],[["result",4],["reader",3],["maxminddberror",4]]]],[11,"from_source","","Open a MaxMind DB database from anything that implements…",1,[[],[["result",4],["reader",3],["maxminddberror",4]]]],[11,"lookup","","Lookup the socket address in the opened MaxMind DB",1,[[["ipaddr",4]],[["maxminddberror",4],["result",4]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","maxminddb::geoip2","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","maxminddb::geoip2::model","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","maxminddb","",2,[[["error",3]],["maxminddberror",4]]],[11,"clone","maxminddb::geoip2","",3,[[],["country",3]]],[11,"clone","","",4,[[],["city",3]]],[11,"clone","","",5,[[],["isp",3]]],[11,"clone","","",6,[[],["connectiontype",3]]],[11,"clone","","",7,[[],["anonymousip",3]]],[11,"clone","","",8,[[],["densityincome",3]]],[11,"clone","","",9,[[],["domain",3]]],[11,"clone","","",10,[[],["asn",3]]],[11,"clone","maxminddb::geoip2::model","",11,[[],["city",3]]],[11,"clone","","",12,[[],["continent",3]]],[11,"clone","","",13,[[],["country",3]]],[11,"clone","","",14,[[],["location",3]]],[11,"clone","","",15,[[],["postal",3]]],[11,"clone","","",16,[[],["representedcountry",3]]],[11,"clone","","",17,[[],["subdivision",3]]],[11,"clone","","",18,[[],["traits",3]]],[11,"eq","maxminddb","",2,[[["maxminddberror",4]]]],[11,"ne","","",2,[[["maxminddberror",4]]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","maxminddb::geoip2","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","maxminddb::geoip2::model","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","maxminddb","",2,[[["formatter",3]],[["error",3],["result",4]]]],[11,"serialize","maxminddb::geoip2","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"serialize","","",6,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"serialize","maxminddb::geoip2::model","",11,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"serialize","","",14,[[],["result",4]]],[11,"serialize","","",15,[[],["result",4]]],[11,"serialize","","",16,[[],["result",4]]],[11,"serialize","","",17,[[],["result",4]]],[11,"serialize","","",18,[[],["result",4]]],[11,"deserialize","maxminddb","",0,[[],["result",4]]],[11,"deserialize","maxminddb::geoip2","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"deserialize","","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]],[11,"deserialize","maxminddb::geoip2::model","",11,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"deserialize","","",14,[[],["result",4]]],[11,"deserialize","","",15,[[],["result",4]]],[11,"deserialize","","",16,[[],["result",4]]],[11,"deserialize","","",17,[[],["result",4]]],[11,"deserialize","","",18,[[],["result",4]]],[11,"custom","maxminddb","",2,[[["display",8]]]]],"p":[[3,"Metadata"],[3,"Reader"],[4,"MaxMindDBError"],[3,"Country"],[3,"City"],[3,"Isp"],[3,"ConnectionType"],[3,"AnonymousIp"],[3,"DensityIncome"],[3,"Domain"],[3,"Asn"],[3,"City"],[3,"Continent"],[3,"Country"],[3,"Location"],[3,"Postal"],[3,"RepresentedCountry"],[3,"Subdivision"],[3,"Traits"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);