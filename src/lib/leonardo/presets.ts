export type Preset = {
  name: string;
  styles: Value[];
  isPromptEnhance: boolean;
  isContrast: boolean;
  models: {
    name: string;
    value: string;
    image: string;
  }[];
};

export type InitGenType = {
  sdGenerationJob: {
    generationId: string;
    apiCreditCost: number;
  };
};

export const presets: Preset[] = [];

export type Model = {
  id: string;
  name: string;
  description: string;
  generated_image: {
    id: string;
    url: string;
  } | null;
};

export type Value = {
  name: string;
  value: string;
};

export const models: Model[] = [
  {
    id: '6b645e3a-d64f-4341-a6d8-7a3690fbf042',
    name: 'Phoenix',
    description: 'A preview release of our own foundational model. Exceptional prompt adherence.',
    generated_image: {
      id: 'bf9a037e-b671-4213-afb2-c63c04235537',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/5e150d17-c580-4ec4-afb6-719884213508/Default_A_majestic_phoenix_wrapped_around_stylized_title_text_1.jpg',
    },
  },
  {
    id: 'e71a1c2f-4f80-4800-934f-2c68979d8cc8',
    name: 'Anime XL',
    description: 'A new high-speed Anime-focused model that excels at a range of anime, illustrative, and CG styles.',
    generated_image: {
      id: '4fc2c951-5a86-4fc1-9ff2-d72a2213bb14',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/16cbffcc-8672-47d6-8738-d22167dcea3f/Default_A_lush_vibrant_anime_hero_figure_emerges_from_the_shad_0.jpg',
    },
  },
  {
    id: 'b24e16ff-06e3-43eb-8d33-4416c2d75876',
    name: 'Lightning XL',
    description: 'Our new high-speed generalist image gen model. Great at everything from photorealism to painterly styles.',
    generated_image: {
      id: 'e1d0556b-7ccd-4568-8b1e-7d33e9db9e82',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/334022a8-7cea-43f9-a8a0-b9c2d232f32f/Default_an_ageing_astronaut_piloting_an_old_spaceship_0.jpg',
    },
  },
  {
    id: '16e7060a-803e-4df3-97ee-edcfa5dc9cc8',
    name: 'SDXL 1.0',
    description: 'Diffusion-based text-to-image generative model',
    generated_image: null,
  },
  {
    id: 'aa77f04e-3eec-4034-9c07-d0f619684628',
    name: 'Kino XL',
    description: 'A model with a strong focus on cinematic outputs. Excels at wider aspect ratios, and does not need a negative prompt.',
    generated_image: {
      id: 'af8d108e-82c9-4330-8301-b3ef3165b637',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/38c684e6-702f-446a-b99b-649462d6a3d6/Leonardo_Kino_XL_cinematic_photo_of_a_surreal_adventurer_on_a_2.jpg',
    },
  },
  {
    id: '5c232a9e-9061-4777-980a-ddc8e65647c6',
    name: 'Vision XL',
    description: 'A versatile model that excels at realism and photography. Better results with longer prompts.',
    generated_image: {
      id: 'b65405dd-9096-42ba-aa59-704e4b0859c0',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg',
    },
  },
  {
    id: '1e60896f-3c26-4296-8ecc-53e2afecc132',
    name: 'Diffusion XL',
    description: 'The next phase of the core model. Stunning outputs, even with short prompts.',
    generated_image: {
      id: 'f85f70f5-ceb2-4665-8089-241ce6f19ea8',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg',
    },
  },
  {
    id: '2067ae52-33fd-4a82-bb92-c2c55e7d2786',
    name: 'AlbedoBase XL',
    description: 'A great generalist model that tends towards more CG artistic outputs. By albedobond.',
    generated_image: {
      id: '2590401b-a844-4b79-b0fa-8c44bb54eda0',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6a441e3f-594d-442f-b70b-0d867a09e589/AlbedoBase_XL_A_sleek_and_menacing_dwarf_his_metallic_body_gle_3.jpg',
    },
  },
  {
    id: 'b63f7119-31dc-4540-969b-2a9df997e173',
    name: 'SDXL 0.9',
    description: 'The latest Stable Diffusion model, currently in Beta.',
    generated_image: {
      id: '4a5b68d4-ef23-4d36-a1d8-b027287da029',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ed4ccd8-649c-4a59-a7bb-9f5b704a91b1/SDXL_09_a_beautiful_woman_vivid_striking_colors_cinematic_phot_0.jpg',
    },
  },
  {
    id: 'd69c8273-6b17-4a30-a13e-d6637ae1c644',
    name: '3D Animation Style',
    description: 'Great at 3D film vibes, capable of complex scenes with rich color. Storyboard time!',
    generated_image: {
      id: 'ca1b67dc-8e39-49a8-8846-f930fb286ba9',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/0e85d140-3ea0-4179-a708-ae95bf9329a3/3D_Animation_Style_a_masterpiece_image_of_an_older_tired_and_b_2.jpg',
    },
  },
  {
    id: 'ac614f96-1082-45bf-be9d-757f2d31c174',
    name: 'DreamShaper v7',
    description: 'Lykon is back with another update. This model is great at a range of different styles.',
    generated_image: null,
  },
  {
    id: 'e316348f-7773-490e-adcd-46757c738eb7',
    name: 'Absolute Reality v1.6',
    description: 'A photorealistic style model from Lykon. Great at all sorts of photorealism.',
    generated_image: {
      id: 'cf623adb-d7f3-43e6-8431-d2edd5a7a08e',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9d7e2dbe-6dff-4bf5-b487-414dee2a10b9/Absolute_Reality_v16_a_stunning_photo_of_a_woman_with_aztech_t_1.jpg',
    },
  },
  {
    id: '1aa0f478-51be-4efd-94e8-76bfc8f533af',
    name: 'Anime Pastel Dream',
    description: 'Pastel anime styling. Use with PMv3 and the anime preset for incredible range. Model by Lykon.',
    generated_image: {
      id: 'c5510862-e82b-4705-861c-58658a89fa9c',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8cc624c3-c1ba-40c9-b3cd-21056382728a/AnimePastelDream_fuji_film_candid_portrait_o_a_black_woman_wea_2.jpg',
    },
  },
  {
    id: 'b7aa9939-abed-4d4e-96c4-140b8c65dd92',
    name: 'DreamShaper v6',
    description: 'A new update to an incredibly versatile model, excels at both people and environments, by Lykon.',
    generated_image: {
      id: 'e7a9a1ff-76be-4cbd-b560-7379f1af2c32',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8ab5c76a-eefb-4801-817f-458f68958db7/DreamShaperV6_a_masterpiece_image_of_Splash_art_music_album_ar_6.jpg',
    },
  },
  {
    id: 'b820ea11-02bf-4652-97ae-9ac0cc00593d',
    name: 'Diffusion',
    description: 'A model with incredible shading and contrast, great at both photos and artistic styles, by cac0e.',
    generated_image: {
      id: '08b6f797-85f1-457a-a194-2e82f725bd6b',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8905a8f0-9219-43ad-8ecb-1c37b4501dc5/Leonardo_Diffusion_ultra_detailed_artistic_photography_of_a_fashion_moden_3.jpg',
    },
  },
  {
    id: 'a097c2df-8f0c-4029-ae0f-8fd349055e61',
    name: 'RPG 4.0',
    description: 'This model is best at creating RPG character portraits with the ability for great photorealism. Created by Anashel.',
    generated_image: null,
  },
  {
    id: '458ecfff-f76c-402c-8b85-f09f6fb198de',
    name: 'Deliberate 1.1',
    description: 'A powerful model created by XpucT that  is great for both photorealism and artistic creations.',
    generated_image: null,
  },
  {
    id: '17e4edbf-690b-425d-a466-53c816f0de8a',
    name: 'Vintage Style Photography',
    description: 'This model can generate a broad range of imagery with a vintage style as if it was taken from a film camera',
    generated_image: {
      id: '7ffe80b5-11d6-419b-89d1-25abe7cd3fd0',
      url: 'https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/7a6f17f3-689c-461d-9c59-14a7ac88fa0e/Vintage_Style_Photography_Classic_convertible_driving_on_an_open_road_vintage_style_2.jpg',
    },
  },
  {
    id: 'f3296a34-9aef-4370-ad18-88daf26862c3',
    name: 'DreamShaper 3.2',
    description: 'This model by Lykon is great at a range of portrait styles as well as artistic backgrounds.',
    generated_image: {
      id: '758af0e6-ffcc-494a-9543-aa123612c968',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/b2919072-7c52-409e-9c2a-11d56c5c2ed2/DreamShaper_32_Full_body_Beautiful_final_fantasy_style_portrait_clean_detai_2.jpg',
    },
  },
  {
    id: 'cd2b2a15-9760-4174-a5ff-4d2925057376',
    name: 'Select',
    description: 'A powerful finetune of SD2.1 that can achieve a high level of realism.',
    generated_image: null,
  },
  {
    id: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
    name: 'Creative',
    description: 'An alternative finetune of SD 2.1 that brings a little more creative interpretation to the mix.',
    generated_image: null,
  },
  {
    id: '47a6232a-1d49-4c95-83c3-2cc5342f82c7',
    name: 'Battle Axes',
    description: 'Generate a variety of detailed axe designs with this model. From medieval battle axes to modern chopping axes, this model is great for creating a r...',
    generated_image: {
      id: '29e709a4-00a0-48c1-af53-1d9640a6febd',
      url: 'https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/1a60b46c-24d1-47c0-9683-e0e837b6f129/Battle_Axes_an_axe_blade_centre_of_frame_3.jpg',
    },
  },
  {
    id: 'e5a291b6-3990-495a-b1fa-7bd1864510a6',
    name: 'Pixel Art',
    description: "A pixel art model that's trained on headshots, but is surprisingly flexible with all sorts of subjects.",
    generated_image: null,
  },
  {
    id: '45ab2421-87de-44c8-a07c-3b87e3bfdf84',
    name: 'Magic Potions',
    description: 'A great model for creating incredible semi-realistic magic potions. Try appending "intricately detailed, 3d vray render" to your prompt.',
    generated_image: {
      id: '3aa11a5c-0496-40ca-b635-e3c78f161666',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6ae64207-79bc-48e2-b721-46c00d8c938b/Default_a_stunningly_beautiful_magic_potion_containing_a_galaxy_fili_1.png',
    },
  },
  {
    id: '2d18c0af-374e-4391-9ca2-639f59837c85',
    name: 'Magic Items',
    description: 'Create a wide range of magical items like weapons, shields, boots, books. Very versatile.',
    generated_image: null,
  },
  {
    id: '302e258f-29b5-4dd8-9a7c-0cd898cb2143',
    name: 'Chest Armor',
    description: 'Create all sorts of chest armor with this model in a consistent style but with wide thematic range.',
    generated_image: null,
  },
  {
    id: '6c95de60-a0bc-4f90-b637-ee8971caf3b0',
    name: 'Character Portraits',
    description: "A model that's for creating awesome RPG characters of varying classes in a consistent style.",
    generated_image: null,
  },
  {
    id: '102a8ee0-cf16-477c-8477-c76963a0d766',
    name: 'Crystal Deposits',
    description: 'A model for creating crystal deposits. Well-suited for use as items or in an isometric environment.',
    generated_image: null,
  },
  {
    id: '5fdadebb-17ae-472c-bf76-877e657f97de',
    name: 'Spirit Creatures',
    description: 'From whimsical fairy-like beings to mythical creatures, create unique cute spirit characters.',
    generated_image: null,
  },
  {
    id: '7a65f0ab-64a7-4be2-bcf3-64a1cc56f627',
    name: 'Isometric Scifi Buildings',
    description: 'Great at creating scifi buildings of varying themes. Append the word isometric to your prompt to ensure an isometric view. "3d vray render" also helps steer the generation well. ',
    generated_image: null,
  },
  {
    id: '6908bfaf-8cf2-4fda-8c46-03f892d82e06',
    name: 'Cute Animal Characters',
    description: 'Perfect for creating adorable and cute animal characters - loveable and playful designs.',
    generated_image: null,
  },
  {
    id: 'ff883b60-9040-4c18-8d4e-ba7522c6b71d',
    name: 'Amulets',
    description: 'Create unique and intricate amulets, jewellery and more. Try loading up the prompt terms to steer it in interesting directions.',
    generated_image: null,
  },
  {
    id: 'ee0fc1a3-aacb-48bf-9234-ada3cc02748f',
    name: 'Shields',
    description: 'Create a variety of impressively varied and detailed shield designs. Allows for an incredible range of material types.',
    generated_image: null,
  },
  {
    id: 'ab200606-5d09-4e1e-9050-0b05b839e944',
    name: 'Isometric Fantasy',
    description:
      'Create all sorts of isometric fantasy environments. Try appending "3d vray render, isometric" and using a guidance scale of 6. For the negative prompt, try "unclear, harsh, oversaturated, soft, blurry".',
    generated_image: {
      id: '8aa79ad7-dca0-4d88-9b8b-e4766e1e9047',
      url: 'https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8f5f48d1-0042-4625-b47a-83e266432abf/Isometric_Fantasy_Waterfall_isolated_on_white_3d_vray_render_isometric_ultra_d_3.jpg',
    },
  },
  {
    id: '50c4f43b-f086-4838-bcac-820406244cec',
    name: 'Cute Characters',
    description: 'Create cute and charming game characters, perfect for adding some whimsy to your game design. Be sure to include the word "character" in your prompts for best results.',
    generated_image: null,
  },
  {
    id: '4b2e0f95-f15e-48d8-ada3-c071d6104db8',
    name: 'Christmas Stickers',
    description: 'Generate festive and fun Christmas stickers with this model. From cute and colorful to traditional and elegant.',
    generated_image: null,
  },
  {
    id: '5fce4543-8e23-4b77-9c3f-202b3f1c211e',
    name: 'Crystal Deposits Alternate',
    description: 'An alternative crystal deposits model that gives a slightly more realistic feel with its creations. Try using "object" and "3d vray render" in your prompts.',
    generated_image: null,
  },
  {
    id: '756be0a8-38b1-4946-ad62-c0ac832422e3',
    name: 'Isometric Asteroid Tiles',
    description:
      'A model for creating isometric asteroid environment tiles. Try appending "3d vray render, unreal engine, beautiful, intricately detailed, trending on artstation, 8k" to your prompt.',
    generated_image: null,
  },
  {
    id: '291be633-cb24-434f-898f-e662799936ad',
    name: 'Signature',
    description: 'The core model of the platform. An extremely powerful and diverse finetune which is highly effective for a wide range of uses.',
    generated_image: null,
  },
];

export const presetStyles: Value[] = [
  {
    name: 'ANIME',
    value: 'ANIME',
  },
  {
    name: 'BOKEH',
    value: 'BOKEH',
  },
  {
    name: 'CINEMATIC',
    value: 'CINEMATIC',
  },
  {
    name: 'CINEMATIC_CLOSEUP',
    value: 'CINEMATIC_CLOSEUP',
  },
  {
    name: 'CREATIVE',
    value: 'CREATIVE',
  },
  {
    name: 'DYNAMIC',
    value: 'DYNAMIC',
  },
  {
    name: 'ENVIRONMENT',
    value: 'ENVIRONMENT',
  },
  {
    name: 'FASHION',
    value: 'FASHION',
  },
  {
    name: 'FILM',
    value: 'FILM',
  },
  {
    name: 'FOOD',
    value: 'FOOD',
  },
  {
    name: 'GENERAL',
    value: 'GENERAL',
  },
  {
    name: 'HDR',
    value: 'HDR',
  },
  {
    name: 'ILLUSTRATION',
    value: 'ILLUSTRATION',
  },
  {
    name: 'LEONARDO',
    value: 'LEONARDO',
  },
  {
    name: 'LONG_EXPOSURE',
    value: 'LONG_EXPOSURE',
  },
  {
    name: 'MACRO',
    value: 'MACRO',
  },
  {
    name: 'MINIMALISTIC',
    value: 'MINIMALISTIC',
  },
  {
    name: 'MONOCHROME',
    value: 'MONOCHROME',
  },
  {
    name: 'MOODY',
    value: 'MOODY',
  },
  {
    name: 'NONE',
    value: 'NONE',
  },
  {
    name: 'NEUTRAL',
    value: 'NEUTRAL',
  },
  {
    name: 'PHOTOGRAPHY',
    value: 'PHOTOGRAPHY',
  },
  {
    name: 'PORTRAIT',
    value: 'PORTRAIT',
  },
  {
    name: 'RAYTRACED',
    value: 'RAYTRACED',
  },
  {
    name: 'RENDER_3D',
    value: 'RENDER_3D',
  },
  {
    name: 'RETRO',
    value: 'RETRO',
  },
  {
    name: 'SKETCH_BW',
    value: 'SKETCH_BW',
  },
  {
    name: 'SKETCH_COLOR',
    value: 'SKETCH_COLOR',
  },
  {
    name: 'STOCK_PHOTO',
    value: 'STOCK_PHOTO',
  },
  {
    name: 'VIBRANT',
    value: 'VIBRANT',
  },
  {
    name: 'UNPROCESSED',
    value: 'UNPROCESSED',
  },
];
