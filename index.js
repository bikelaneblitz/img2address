var ExifImage = require('exif').ExifImage;
var dms2dec = require('dms2dec');

try {
    new ExifImage({ image : '/Users/mattkime/Downloads/28106526640_33bac7116f_o.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else

            console.log(exifData.gps); // Do something with your data!
			console.log( dms2dec(exifData.gps.GPSLatitude,exifData.gps.GPSLatitudeRef,exifData.gps.GPSLongitude,exifData.gps.GPSLongitudeRef) );
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
