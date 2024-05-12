import generateName from './utils/generateName.js';
import putPhraseOnPhoto from './utils/putPhraseOnPhoto.js';
import putVocabOnPhoto from './utils/putVocabOnPhoto.js';
import putSinglePhraseOnPhoto from './utils/putSinglePhraseOnPhoto.js';
import currentDate from './utils/createDate.js';


    const data = [
    {
        hindiText: "कब हुआ",
        englishText: "When did it happen?",
    },
    {
        hindiText: "अगर प्यार करना गुनाह है, तो मैं उम्रकैद की सजा भुगतने को तैयार हूँ।",
        englishText: "If loving you is a crime, then I'm ready for a life sentence.",
    },
]

function useManualUrl(height, width, urls, folderName, type){
  const time = currentDate();

  for(let i = 0; i < data.length; i++){
    const {englishText, hindiText} = data[i];
    // console.log(englishText, hindiText);
    const photoPath = `${urls}${i+1}.jpg`;

    // const fileName = generateName(); // random name generator
    const fileName = "0" + (i + 1).toString();
    const outputPath = (`D:/Instagram/${folderName}/${time}/${fileName}.jpg`);
    
    if(type == 'phrase'){
        putPhraseOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }else if(type == 'vocab'){
        putVocabOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }else{
        putSinglePhraseOnPhoto(photoPath, englishText, hindiText, outputPath, height, width);
    }
  }
}

(() => {
    try {
        const height = 1920;
        const width = 1080;
        const lang = "hindi";

        // useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "vocab");
        useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "phrase");
        // useManualUrl(height, width, './utils/imagesData/local-images/', "English Sikho AK", "single-phrase"); // put your content under englishText obj and leave hindiText blank

    } catch (error) {
        console.log("app.js", error);
    }

})();