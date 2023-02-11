import {Dimensions} from 'react-native';
import WallPaperManager from "react-native-set-wallpaper";
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);

function setWall(URL){
  WallPaperManager.setWallpaper({ uri: URL }, (res) => {
  console.log(res);
});
}
function SetWallpaper() {
const FontSize = '56'
const plainText = "Hello \n How \n Are \n You"
const Background = '000000,128'
const TextColour = 'fff,255'
const url = "https://fakeimg.pl/"+windowWidth+'x'+windowHeight+'/'+Background+'/'+TextColour+'/?font_size='+FontSize+'&text='+encodeURIComponent(plainText);
setWall(url);
}
// SetWallpaper('000000', 'fff', "56", "Hello \n How \n Are \n You");
export default SetWallpaper; 