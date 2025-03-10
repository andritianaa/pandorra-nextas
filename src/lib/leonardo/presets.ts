export type Preset = {
  name: string
  styles: Value[]
  isPromptEnhance: boolean
  isContrast: boolean
  models: {
    name: string
    value: string
    image: string
  }[]
}

export type InitGenType = {
  sdGenerationJob: {
    generationId: string
    apiCreditCost: number
  }
}

export const presets: Preset[] = []

export type Model = {
  id: string
  name: string
  description: string
  nsfw: boolean
  featured: boolean
  generated_image: {
    id: string
    url: string
  } | null
}

export type Value = {
  name: string
  value: string
}

export const models: Model[] = [
  {
    id: "de7d3faf-762f-48e0-b3b7-9d0ac3a3fcf3",
    name: "Pandorra Phoenix 1.0",
    description:
      "Pandorra's proprietary foundational model, delivering exceptional prompt adherence and text rendering.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "744d2b7d-c1c0-4f72-8862-70ceffe6698b",
      url: "https://cdn.leonardo.ai/users/36216618-c37a-47a7-ada5-b4483583ab35/generations/5b48c048-613d-4fdd-a141-f701f3f86fef/Leonardo_Phoenix_10_Generate_an_image_of_a_majestic_phoenix_wi_0.jpg",
    },
  },
  {
    id: "b2614463-296c-462a-9586-aafdb8f00e36",
    name: "Flux Dev",
    description:
      "A specialized model built for developers. Great for rapid prototyping and creative iteration.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "d4e54c43-e278-48a1-8364-8b1f92307448",
      url: "https://cdn.leonardo.ai/users/36216618-c37a-47a7-ada5-b4483583ab35/generations/82c27b17-d318-441c-bedf-9bdebab6f047/segments/1:1:1/Flux_Dev_Generate_an_image_of_a_young_girl_with_long_curly_hai_0.jpeg",
    },
  },
  {
    id: "1dd50843-d653-4516-a8e3-f0238ee453ff",
    name: "Flux Schnell",
    description:
      "A high-speed model, designed for efficient, quick outputs. Perfect for fast-paced projects without sacrificing quality.",
    nsfw: false,
    featured: false,
    generated_image: null,
  },
  {
    id: "e71a1c2f-4f80-4800-934f-2c68979d8cc8",
    name: "Pandorra Anime XL",
    description:
      "A new high-speed Anime-focused model that excels at a range of anime, illustrative, and CG styles.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "4fc2c951-5a86-4fc1-9ff2-d72a2213bb14",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/16cbffcc-8672-47d6-8738-d22167dcea3f/Default_A_lush_vibrant_anime_hero_figure_emerges_from_the_shad_0.jpg",
    },
  },
  {
    id: "b24e16ff-06e3-43eb-8d33-4416c2d75876",
    name: "Pandorra Lightning XL",
    description:
      "Our new high-speed generalist image gen model. Great at everything from photorealism to painterly styles.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "e1d0556b-7ccd-4568-8b1e-7d33e9db9e82",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/334022a8-7cea-43f9-a8a0-b9c2d232f32f/Default_an_ageing_astronaut_piloting_an_old_spaceship_0.jpg",
    },
  },
  {
    id: "16e7060a-803e-4df3-97ee-edcfa5dc9cc8",
    name: "SDXL 1.0",
    description: "Diffusion-based text-to-image generative model",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "aa6140cb-42dc-465c-a518-e461da96472c",
      url: "https://cdn.leonardo.ai/users/8d579b04-03c4-4d41-8132-99e6cc6864b2/generations/834b80d5-b42e-4200-b5be-1929710106db/Default_A_stunningly_crafted_oneofakind_electric_guitar_adorne_0.jpg",
    },
  },
  {
    id: "aa77f04e-3eec-4034-9c07-d0f619684628",
    name: "Pandorra Kino XL",
    description:
      "A model with a strong focus on cinematic outputs. Excels at wider aspect ratios, and does not need a negative prompt.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "af8d108e-82c9-4330-8301-b3ef3165b637",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/38c684e6-702f-446a-b99b-649462d6a3d6/Leonardo_Kino_XL_cinematic_photo_of_a_surreal_adventurer_on_a_2.jpg",
    },
  },
  {
    id: "5c232a9e-9061-4777-980a-ddc8e65647c6",
    name: "Pandorra Vision XL",
    description:
      "A versatile model that excels at realism and photography. Better results with longer prompts.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "b65405dd-9096-42ba-aa59-704e4b0859c0",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg",
    },
  },
  {
    id: "1e60896f-3c26-4296-8ecc-53e2afecc132",
    name: "Pandorra Diffusion XL",
    description:
      "The next phase of the core Pandorra model. Stunning outputs, even with short prompts.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "f85f70f5-ceb2-4665-8089-241ce6f19ea8",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg",
    },
  },
  {
    id: "2067ae52-33fd-4a82-bb92-c2c55e7d2786",
    name: "AlbedoBase XL",
    description:
      "A great generalist model that tends towards more CG artistic outputs. By albedobond.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "2590401b-a844-4b79-b0fa-8c44bb54eda0",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6a441e3f-594d-442f-b70b-0d867a09e589/AlbedoBase_XL_A_sleek_and_menacing_dwarf_his_metallic_body_gle_3.jpg",
    },
  },
  {
    id: "f1929ea3-b169-4c18-a16c-5d58b4292c69",
    name: "RPG v5",
    description:
      "Anashel returns with another great model, specialising in RPG characters of all kinds.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "ea3c5232-3c5d-4b64-bd1a-be698576b769",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/ad43331b-c80c-40e5-8462-304aaaef3584/RPG_v5_a_stunning_photograph_of_a_grotesque_alien_creature_wit_1.jpg",
    },
  },
  {
    id: "b63f7119-31dc-4540-969b-2a9df997e173",
    name: "SDXL 0.9",
    description: "The latest Stable Diffusion model, currently in Beta.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "4a5b68d4-ef23-4d36-a1d8-b027287da029",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ed4ccd8-649c-4a59-a7bb-9f5b704a91b1/SDXL_09_a_beautiful_woman_vivid_striking_colors_cinematic_phot_0.jpg",
    },
  },
  {
    id: "d69c8273-6b17-4a30-a13e-d6637ae1c644",
    name: "3D Animation Style",
    description:
      "Great at 3D film vibes, capable of complex scenes with rich color. Storyboard time!",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "ca1b67dc-8e39-49a8-8846-f930fb286ba9",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/0e85d140-3ea0-4179-a708-ae95bf9329a3/3D_Animation_Style_a_masterpiece_image_of_an_older_tired_and_b_2.jpg",
    },
  },
  {
    id: "ac614f96-1082-45bf-be9d-757f2d31c174",
    name: "DreamShaper v7",
    description:
      "Lykon is back with another update. This model is great at a range of different styles.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "fb390f8e-e9d6-4ee8-a67c-7cae9a132bab",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bff69fae-6e4e-48d1-8a8f-6c75799be511/DreamShaper_v7_an_older_tired_and_battleworn_male_detective_hi_1.jpg",
    },
  },
  {
    id: "e316348f-7773-490e-adcd-46757c738eb7",
    name: "Absolute Reality v1.6",
    description:
      "A photorealistic style model from Lykon. Great at all sorts of photorealism.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "cf623adb-d7f3-43e6-8431-d2edd5a7a08e",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9d7e2dbe-6dff-4bf5-b487-414dee2a10b9/Absolute_Reality_v16_a_stunning_photo_of_a_woman_with_aztech_t_1.jpg",
    },
  },
  {
    id: "1aa0f478-51be-4efd-94e8-76bfc8f533af",
    name: "Anime Pastel Dream",
    description:
      "Pastel anime styling. Use with PMv3 and the anime preset for incredible range. Model by Lykon.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "c5510862-e82b-4705-861c-58658a89fa9c",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8cc624c3-c1ba-40c9-b3cd-21056382728a/AnimePastelDream_fuji_film_candid_portrait_o_a_black_woman_wea_2.jpg",
    },
  },
  {
    id: "b7aa9939-abed-4d4e-96c4-140b8c65dd92",
    name: "DreamShaper v6",
    description:
      "A new update to an incredibly versatile model, excels at both people and environments, by Lykon.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "e7a9a1ff-76be-4cbd-b560-7379f1af2c32",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8ab5c76a-eefb-4801-817f-458f68958db7/DreamShaperV6_a_masterpiece_image_of_Splash_art_music_album_ar_6.jpg",
    },
  },
  {
    id: "d2fb9cf9-7999-4ae5-8bfe-f0df2d32abf8",
    name: "DreamShaper v5",
    description:
      "A versatile model great at both photorealism and anime, includes noise offset training, by Lykon.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "27bec45f-b450-4775-817f-761683f2cc5e",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bb22942b-40c8-4a06-a219-238808053ee0/DreamShaper_v5_extremely_intricate_fantasy_character_photoreal_0.jpg",
    },
  },
  {
    id: "b820ea11-02bf-4652-97ae-9ac0cc00593d",
    name: "Pandorra Diffusion",
    description:
      "A model with incredible shading and contrast, great at both photos and artistic styles, by cac0e.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "08b6f797-85f1-457a-a194-2e82f725bd6b",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8905a8f0-9219-43ad-8ecb-1c37b4501dc5/Leonardo_Diffusion_ultra_detailed_artistic_photography_of_a_fashion_moden_3.jpg",
    },
  },
  {
    id: "a097c2df-8f0c-4029-ae0f-8fd349055e61",
    name: "RPG 4.0",
    description:
      "This model is best at creating RPG character portraits with the ability for great photorealism. Created by Anashel.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "1cd73660-1c9c-4409-b856-e5da0d30d003",
      url: "https://cdn.leonardo.ai/users/b35decec-845a-475a-960f-a690332c3cf3/generations/926c827d-3504-4541-b4ff-49c5f4487858/RPG_Photography_of_a_well_built_modern_cottage_house_sitting_on_t_0.jpg",
    },
  },
  {
    id: "458ecfff-f76c-402c-8b85-f09f6fb198de",
    name: "Deliberate 1.1",
    description:
      "A powerful model created by XpucT that  is great for both photorealism and artistic creations.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "2a6793b4-8482-4026-8bf7-09151ab3159f",
      url: "https://cdn.leonardo.ai/users/2e1f21ed-7ca4-4f78-80ed-1646ea463a01/generations/ddf7239c-4972-429b-8a0a-1de6f9647738/Deliberate_High_detail_RAW_color_art_animation_cartoon_magical_atmospher_0.jpg",
    },
  },
  {
    id: "17e4edbf-690b-425d-a466-53c816f0de8a",
    name: "Vintage Style Photography",
    description:
      "This model can generate a broad range of imagery with a vintage style as if it was taken from a film camera",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "7ffe80b5-11d6-419b-89d1-25abe7cd3fd0",
      url: "https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/7a6f17f3-689c-461d-9c59-14a7ac88fa0e/Vintage_Style_Photography_Classic_convertible_driving_on_an_open_road_vintage_style_2.jpg",
    },
  },
  {
    id: "f3296a34-9aef-4370-ad18-88daf26862c3",
    name: "DreamShaper 3.2",
    description:
      "This model by Lykon is great at a range of portrait styles as well as artistic backgrounds.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "758af0e6-ffcc-494a-9543-aa123612c968",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/b2919072-7c52-409e-9c2a-11d56c5c2ed2/DreamShaper_32_Full_body_Beautiful_final_fantasy_style_portrait_clean_detai_2.jpg",
    },
  },
  {
    id: "cd2b2a15-9760-4174-a5ff-4d2925057376",
    name: "Pandorra Select",
    description:
      "A powerful finetune of SD2.1 that can achieve a high level of realism.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "5c1a4725-160d-49cb-9b91-4ad2ac3de9a8",
      url: "https://cdn.leonardo.ai/users/2e1f21ed-7ca4-4f78-80ed-1646ea463a01/generations/ff4e1c40-933a-47da-8c52-31689ed282d7/Leonardo_Select_portrait_of_female_character_wearing_80s_clothing_she_should_0.png",
    },
  },
  {
    id: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
    name: "Pandorra Creative",
    description:
      "An alternative finetune of SD 2.1 that brings a little more creative interpretation to the mix.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "13be8ad1-316b-4833-b165-53124f8a39ee",
      url: "https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/2012890f-ab48-461a-b50f-d4a069256ca0/Leonardo_Creative_A_fierce_Viking_warrior_standing_tall_with_a_battleworn_axe_1.png",
    },
  },
  {
    id: "47a6232a-1d49-4c95-83c3-2cc5342f82c7",
    name: "Battle Axes",
    description:
      "Generate a variety of detailed axe designs with this model. From medieval battle axes to modern chopping axes, this model is great for creating a r...",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "29e709a4-00a0-48c1-af53-1d9640a6febd",
      url: "https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/1a60b46c-24d1-47c0-9683-e0e837b6f129/Battle_Axes_an_axe_blade_centre_of_frame_3.jpg",
    },
  },
  {
    id: "e5a291b6-3990-495a-b1fa-7bd1864510a6",
    name: "Pixel Art",
    description:
      "A pixel art model that's trained on headshots, but is surprisingly flexible with all sorts of subjects.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "7f27fe2d-66e7-418f-9dee-74e12c42bf57",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/5628b06f-d989-4f89-87b2-9f7af4bb0ee7/Default_A_robotic_cat_with_glowing_eyes_and_sleek_metal_fur_1.png",
    },
  },
  {
    id: "2d18c0af-374e-4391-9ca2-639f59837c85",
    name: "Magic Items",
    description:
      "Create a wide range of magical items like weapons, shields, boots, books. Very versatile.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "66dfe54f-2a56-49d7-b5aa-04ad012a9293",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/1a2ce3b1-998c-4795-8582-6f49aca28160/Default_a_red_boot_object_concept_art_dota_2_style_red_abstract_backg_1.png",
    },
  },
  {
    id: "102a8ee0-cf16-477c-8477-c76963a0d766",
    name: "Crystal Deposits",
    description:
      "A model for creating crystal deposits. Well-suited for use as items or in an isometric environment.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "f7542346-c640-40ba-9f51-453e1cea3020",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/a9c191fa-6137-4e01-922c-943ee4e4788c/Default_a_yellow_tkwst2_object_2d_object_art_by_tekkonkinkreet_octane_2.png",
    },
  },
  {
    id: "45ab2421-87de-44c8-a07c-3b87e3bfdf84",
    name: "Magic Potions",
    description:
      "A great model for creating incredible semi-realistic magic potions. Try appending intricately detailed, 3d vray render to your prompt.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "a7303236-34f8-4ce7-a187-a95966b858ff",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8765c4f3-55ed-40c0-9aeb-778f54ee27ab/Default_a_stunning_magic_potion_intricately_detailed_3d_vray_render_3.png",
    },
  },
  {
    id: "6c95de60-a0bc-4f90-b637-ee8971caf3b0",
    name: "Character Portraits",
    description:
      "A model that's for creating awesome RPG characters of varying classes in a consistent style.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "f10dabe4-14c7-4668-8ea9-0f6ad9f57069",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/51826859-4c2a-4aeb-a3fb-beaf9d0024c6/Default_female_paladin_pink_hair_detailed_soft_hyperdetailed_Cinemati_3.png",
    },
  },
  {
    id: "302e258f-29b5-4dd8-9a7c-0cd898cb2143",
    name: "Chest Armor",
    description:
      "Create all sorts of chest armor with this model in a consistent style but with wide thematic range.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "050cb02c-5122-4e97-9810-f784e6bb64c4",
      url: "https://cdn.leonardo.ai/users/2e1f21ed-7ca4-4f78-80ed-1646ea463a01/generations/465401c6-febf-4223-a9f1-fae4e54931bf/Default_test_chest_armor_2.png",
    },
  },
  {
    id: "5fdadebb-17ae-472c-bf76-877e657f97de",
    name: "Spirit Creatures",
    description:
      "From whimsical fairy-like beings to mythical creatures, create unique cute spirit characters.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "f9e470bc-7fd3-4472-ae77-c1c09eb8f5d5",
      url: "https://cdn.leonardo.ai/users/7a129367-fa22-48ff-a5eb-441861c60a20/generations/8874bdc9-9e80-4acb-ae5a-fa2c4db6819b/Default_a_creature_with_more_than_six_eyes_in_rainbow_colors_0.png",
    },
  },
  {
    id: "6908bfaf-8cf2-4fda-8c46-03f892d82e06",
    name: "Cute Animal Characters",
    description:
      "Perfect for creating adorable and cute animal characters - loveable and playful designs.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "de3da9e6-eab2-4306-a336-43edce4b00b0",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6ac55e1f-500a-4967-bf7e-e5af117c5f6d/Default_a_rabbit_character_0.png",
    },
  },
  {
    id: "4b2e0f95-f15e-48d8-ada3-c071d6104db8",
    name: "Christmas Stickers",
    description:
      "Generate festive and fun Christmas stickers with this model. From cute and colorful to traditional and elegant.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "3c737702-f32e-4dc0-b2d6-6e8a9a036be5",
      url: "https://cdn.leonardo.ai/users/2e1f21ed-7ca4-4f78-80ed-1646ea463a01/generations/15aaa53a-6ee1-4887-bfba-f00213f64756/Default_test_sticker_0.png",
    },
  },
  {
    id: "7a65f0ab-64a7-4be2-bcf3-64a1cc56f627",
    name: "Isometric Scifi Buildings",
    description:
      "Great at creating scifi buildings of varying themes. Append the word isometric to your prompt to ensure an isometric view. 3d vray render also helps steer the generation well. ",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "08cf2772-080e-4220-ac97-91cc13f18e61",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/1aa5f16a-b64e-4a41-98d2-702fae7d4ba2/Default_a_stunning_scifi_base_turrets_and_lasers_3d_vray_render_0.png",
    },
  },
  {
    id: "50c4f43b-f086-4838-bcac-820406244cec",
    name: "Cute Characters",
    description:
      "Create cute and charming game characters, perfect for adding some whimsy to your game design. Be sure to include the word character in your prompts for best results.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "68ed1341-ea92-4637-9bb9-237432628c13",
      url: "https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/85cf7bd8-a233-42ca-a7d0-e900a0bdbb2a/Default_A_zany_game_character_clad_in_an_outrageous_cowboy_grass_skir_1.png",
    },
  },
  {
    id: "ff883b60-9040-4c18-8d4e-ba7522c6b71d",
    name: "Amulets",
    description:
      "Create unique and intricate amulets, jewellery and more. Try loading up the prompt terms to steer it in interesting directions.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "b68004dd-c030-4e51-8e68-d9638506e15a",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/edccace2-4291-482b-b3c6-d735ff06e640/Default_A_closeup_of_an_ancient_amulet_illuminated_by_a_single_ray_o_2.png",
    },
  },
  {
    id: "ab200606-5d09-4e1e-9050-0b05b839e944",
    name: "Isometric Fantasy",
    description:
      "Create all sorts of isometric fantasy environments. Try appending 3d vray render, isometric and using a guidance scale of 6. For the negative prompt, try unclear, harsh, oversaturated, soft, blurry.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "9eeddd56-fd49-4805-8c37-4ee03ddbc5f1",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9f8ee7a6-e5b9-4fe1-9a14-77d7f44ad4e1/Default_a_fantasy_diorama_with_a_castle_and_lake_0.png",
    },
  },
  {
    id: "ee0fc1a3-aacb-48bf-9234-ada3cc02748f",
    name: "Shields",
    description:
      "Create a variety of impressively varied and detailed shield designs. Allows for an incredible range of material types.",
    nsfw: false,
    featured: true,
    generated_image: {
      id: "da79e8e6-2bd1-4022-82c4-f21127bbc3fc",
      url: "https://cdn.leonardo.ai/users/4e397cdd-4af3-48e5-b0e7-c2b5d1ebee59/generations/7b3c338c-8011-42e7-bcc7-4c9cfd450b71/Default_An_extraterrestrial_shield_bearing_delicate_swirls_and_ethere_1.png",
    },
  },
  {
    id: "5fce4543-8e23-4b77-9c3f-202b3f1c211e",
    name: "Crystal Deposits Alternate",
    description:
      "An alternative crystal deposits model that gives a slightly more realistic feel with its creations. Try using object and 3d vray render in your prompts.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "f0a9188d-219b-4d60-af1d-df802f636175",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/49c5c8a5-5fd9-4222-bc15-6ac8cd63cb8e/Default_a_crystal_1.png",
    },
  },
  {
    id: "756be0a8-38b1-4946-ad62-c0ac832422e3",
    name: "Isometric Asteroid Tiles",
    description:
      "A model for creating isometric asteroid environment tiles. Try appending 3d vray render, unreal engine, beautiful, intricately detailed, trending on artstation, 8k to your prompt.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "1b5c1821-9ebf-4fea-867f-58e847c0995e",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8cd48839-28fe-4f25-9a32-b7a8a118583b/Default_isometric_tile_3d_vray_render_unreal_engine_beautiful_intrica_0.png",
    },
  },
  {
    id: "291be633-cb24-434f-898f-e662799936ad",
    name: "Pandorra Signature",
    description:
      "The core model of the Pandorra platform. An extremely powerful and diverse finetune which is highly effective for a wide range of uses.",
    nsfw: false,
    featured: false,
    generated_image: {
      id: "eec2d87e-d27c-4b95-8a1a-b948fd49df1e",
      url: "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/2956bf2a-3039-43ee-83d6-65318e5f58fa/Default_an_incredibly_stunning_photograph_of_a_throne_room_soft_light_2.png",
    },
  },
]

export function findModelById(id: string): Model | undefined {
  return models.find((model) => model.id === id)
}

export const presetStyles: Value[] = [
  {
    name: "DYNAMIC",
    value: "DYNAMIC",
  },
  {
    name: "ANIME",
    value: "ANIME",
  },
  {
    name: "CINEMATIC",
    value: "CINEMATIC",
  },
  {
    name: "ENVIRONMENT",
    value: "ENVIRONMENT",
  },
  {
    name: "FASHION",
    value: "FASHION",
  },
  {
    name: "FOOD",
    value: "FOOD",
  },
  {
    name: "LONG_EXPOSURE",
    value: "LONG_EXPOSURE",
  },
  {
    name: "MACRO",
    value: "MACRO",
  },
  {
    name: "PHOTOGRAPHY",
    value: "PHOTOGRAPHY",
  },
  {
    name: "PORTRAIT",
    value: "PORTRAIT",
  },
  // {
  //   name: "ILLUSTRATION",
  //   value: "ILLUSTRATION",
  // },
  // {
  //   name: "RETRO",
  //   value: "RETRO",
  // },

  // {
  //   name: "MONOCHROME",
  //   value: "MONOCHROME",
  // },
  // {
  //   name: "CREATIVE",
  //   value: "CREATIVE",
  // },
  // {
  //   name: "BOKEH",
  //   value: "BOKEH",
  // },

  // {
  //   name: "CINEMATIC_CLOSEUP",
  //   value: "CINEMATIC_CLOSEUP",
  // },

  // {
  //   name: "FILM",
  //   value: "FILM",
  // },
  // {
  //   name: "GENERAL",
  //   value: "GENERAL",
  // },
  // {
  //   name: "HDR",
  //   value: "HDR",
  // },
  // {
  //   name: "MINIMALISTIC",
  //   value: "MINIMALISTIC",
  // },
  // {
  //   name: "MOODY",
  //   value: "MOODY",
  // },
  // {
  //   name: "NONE",
  //   value: "NONE",
  // },
  // {
  //   name: "NEUTRAL",
  //   value: "NEUTRAL",
  // },
  // {
  //   name: "RAYTRACED",
  //   value: "RAYTRACED",
  // },
  // {
  //   name: "RENDER_3D",
  //   value: "RENDER_3D",
  // },
  // {
  //   name: "SKETCH_BW",
  //   value: "SKETCH_BW",
  // },
  // {
  //   name: "SKETCH_COLOR",
  //   value: "SKETCH_COLOR",
  // },
  // {
  //   name: "STOCK_PHOTO",
  //   value: "STOCK_PHOTO",
  // },
  // {
  //   name: "VIBRANT",
  //   value: "VIBRANT",
  // },
  // {
  //   name: "UNPROCESSED",
  //   value: "UNPROCESSED",
  // },
]
