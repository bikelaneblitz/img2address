var ExifImage = require('exif').ExifImage;
var dms2dec = require('dms2dec');
var NodeGeocoder = require('node-geocoder');

try {
    new ExifImage({ image : '/Users/Downloads/gps.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else

            //console.log(exifData); // Do something with your data!
			console.log(exifData.image.ModifyDate);
			var decLatLong = dms2dec(exifData.gps.GPSLatitude,exifData.gps.GPSLatitudeRef,exifData.gps.GPSLongitude,exifData.gps.GPSLongitudeRef);
			console.log ( decLatLong );

			var options = {
				provider: 'google',
				httpAdapter: 'http',
				key: 'AIzaSyDR7hQSxEDfJkNqynk8pr1sDRm0CNA0_1o'
			};

			var geocoder = NodeGeocoder(options);

			geocoder.reverse({lat:decLatLong[0], lon:decLatLong[1]}, ( err, res) =>{
			
			//geocoder.reverse({lat:45.767, lon:4.833}, ( err, res) =>{
				console.log(err);
				console.log(res);
			})
			/*
			geocoder.geocode('29 champs elysée paris', function(err, res) {
				console.log(res);
			});*/
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
