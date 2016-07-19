var ExifImage = require('exif').ExifImage;
var dms2dec = require('dms2dec');
var NodeGeocoder = require('node-geocoder');

try {
    new ExifImage({ image : '/Users/mattk/Desktop/28095453210_36e1064241_o.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else

            //console.log(exifData); // Do something with your data!
			console.log(exifData.image.ModifyDate);
			var decLatLong = dms2dec(exifData.gps.GPSLatitude,exifData.gps.GPSLatitudeRef,exifData.gps.GPSLongitude,exifData.gps.GPSLongitudeRef);
			console.log ( decLatLong );

			var options = {
				provider: 'google',
				key: 'AIzaSyDR7hQSxEDfJkNqynk8pr1sDRm0CNA0_1o'
			};

			var geocoder = NodeGeocoder(options);

			geocoder.reverse({lat:decLatLong[1], 'long':decLatLong[0]}, ( err, res) =>{
				console.log(err);
				console.log(res);
			})
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
