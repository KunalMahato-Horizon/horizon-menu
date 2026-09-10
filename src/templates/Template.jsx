import React from 'react';
import TemplateOne from './Template-1/TemplateOne';
import TemplateTwo from './Template-2/TemplateTwo';
import TemplateThree from './Template-3/Template-3';
import TemplateFour from './Template-4/Template-4';
import TemplateFive from './Template-5/Template-5';
import TemplateSix from './Template-6/Template-6';
import TemplateSeven from './Template-7/Template-7';
import TemplateEight from './Template-8/Template-8';
import TemplateNine from './Template-9/Template-9';
import TemplateTen from './Template-10/Template-10';
import TemplateEleven from './Template-11/Template-11';
import TemplateTwelve from './Template-12/Template-12';
import TemplateThirteen from './Template-13/Template-13';
import TemplateFourteen from './Template-14/Template-14';
import TemplateFifteen from './Template-15/Template-15';
import TemplateSixteen from './Template-16/Template-16';
import TemplateSeventeen from './Template-17/Template-17';
import TemplateEighteen from './Template-18/Template-18';
import TemplateNineteen from './Template-19/Template-19';
import TemplateTwenty from './Template-20/Template-20';
import TemplateTwentyOne from './Template-21/Template-21';
import TemplateTwentyTwo from './Template-22/Template-22';
import TemplateTwentyThree from './Template-23/Template-23';
import TemplateTwentyFour from './Template-24/Template-24';
import TemplateTwentyFive from './Template-25/Template-25';
import TemplateTwentySix from './Template-26/Template-26';
import TemplateTwentySeven from './Template-27/Template-27';
import TemplateTwentyEight from './Template-28/Template-28';
import TemplateTwentyNine from './Template-29/Template-29';
import TemplateThirty from './Template-30/Template-30';
import TemplateThirtyOne from './Template-31/Template-31';
import TemplateThirtyTwo from './Template-32/Template-32';
import TemplateThirtyThree from './Template-33/Template-33';
import TemplateThirtyFour from './Template-34/Template-34';
import TemplateThirtyFive from './Template-35/Template-35';
import TemplateThirtySix from './Template-36/Template-36';
import TemplateThirtySeven from './Template-37/Template-37';
import TemplateThirtyEight from './Template-38/Template-38';
import TemplateThirtyNine from './Template-39/Template-39';
import TemplateForty from './Template-40/Template-40';
import TemplateFortyOne from './Template-41/Template-41';
import TemplateFortyTwo from './Template-42/Template-42';
import TemplateFortyThree from './Template-43/Template-43';
import TemplateFortyFour from './Template-44/Template-44';
import TemplateFortyFive from './Template-45/Template-45';
import TemplateFortySix from './Template-46/Template-46';
import TemplateFortySeven from './Template-47/Template-47';
import cafeNovaMenu from './data/cafe-nova';

/**
 * Template Router
 * 
 * Route Pattern: /menu/:business-name/template-:number
 * Example: /menu/cafe-nova/template-11
 */

const Template = () => {
  const pathname = window.location.pathname;

  // Extract template number from URL
  const templateMatch = pathname.match(/template-(\d+)/);
  const templateNumber = templateMatch ? parseInt(templateMatch[1], 10) : 1;

  // Map template numbers to components
  const templateMap = {
    1: TemplateOne,
    2: TemplateTwo,
    3: TemplateThree,
    4: TemplateFour,
    5: TemplateFive,
    6: TemplateSix,
    7: TemplateSeven,
    8: TemplateEight,
    9: TemplateNine,
    10: TemplateTen,
    11: TemplateEleven,
    12: TemplateTwelve,
    13: TemplateThirteen,
    14: TemplateFourteen,
    15: TemplateFifteen,
    16: TemplateSixteen,
    17: TemplateSeventeen,
    18: TemplateEighteen,
    19: TemplateNineteen,
    20: TemplateTwenty,
    21: TemplateTwentyOne,
    22: TemplateTwentyTwo,
    23: TemplateTwentyThree,
    24: TemplateTwentyFour,
    25: TemplateTwentyFive,
    26: TemplateTwentySix,
    27: TemplateTwentySeven,
    28: TemplateTwentyEight,
    29: TemplateTwentyNine,
    30: TemplateThirty,
    31: TemplateThirtyOne,
    32: TemplateThirtyTwo,
    33: TemplateThirtyThree,
    34: TemplateThirtyFour,
    35: TemplateThirtyFive,
    36: TemplateThirtySix,
    37: TemplateThirtySeven,
    38: TemplateThirtyEight,
    39: TemplateThirtyNine,
    40: TemplateForty,
    41: TemplateFortyOne,
    42: TemplateFortyTwo,
    43: TemplateFortyThree,
    44: TemplateFortyFour,
    45: TemplateFortyFive,
    46: TemplateFortySix,
    47: TemplateFortySeven,
  };

  // Get the template component
  const SelectedTemplate = templateMap[templateNumber] || TemplateOne;

  // Render the selected template with menu data
  return <SelectedTemplate menuData={cafeNovaMenu} />;
};

export default Template;