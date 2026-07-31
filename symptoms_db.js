export const symptomsDatabase = {
    "Fever": {
        questions: [
            "Do you have chills or shivering? (Kya aapko thand lag rahi hai?)",
            "Do you have body ache? (Kya aapke badan me dard hai?)",
            "Is your temperature above 102°F?"
        ],
        en: {
            exercise_steps: "Rest in a well-ventilated room. Avoid heavy physical exercise.",
            precautions: "Drink plenty of water and warm fluids. Wear light, breathable clothes.",
            first_aid: ["Apply a cold compress on the forehead.", "Take Paracetamol if needed."],
            when_to_see_doctor: "If fever lasts more than 3 days, crosses 103°F, or you have a severe headache."
        },
        hi: {
            exercise_steps: "Hawa daar kamre me aaram karein. Bhari vyayam (exercise) na karein.",
            precautions: "Khub pani aur gunguna taral padarth piyein. Tite kapde na pehne.",
            first_aid: ["Mathe par thande pani ki patti rakhein.", "Zaroorat padne par Paracetamol lein."],
            when_to_see_doctor: "Agar bukhar 3 din se zyada rahe, 103°F cross kare, ya tez sir dard ho."
        }
    },
    "Common Cold": {
        questions: [
            "Do you have a runny or blocked nose? (Kya aapki naak beh rahi hai ya band hai?)",
            "Are you sneezing frequently? (Kya aapko lagatar chheenk aa rahi hai?)",
            "Do you feel mild tiredness? (Kya halki thakan mehsoos ho rahi hai?)"
        ],
        en: {
            exercise_steps: "Mild stretching is fine, but prioritize sleep and rest.",
            precautions: "Avoid cold drinks and AC. Wash hands frequently.",
            first_aid: ["Inhale steam with eucalyptus oil.", "Drink warm water with honey and ginger."],
            when_to_see_doctor: "If cold persists for more than 10 days or breathing becomes difficult."
        },
        hi: {
            exercise_steps: "Halki stretching theek hai, par aaram aur neend par dhyan dein.",
            precautions: "Thande drinks aur AC se bachein. Haath baar-baar dhoyein.",
            first_aid: ["Nilgiri tel ke sath bhaap lein.", "Shahad aur adrak ke sath garam pani piyein."],
            when_to_see_doctor: "Agar zukam 10 din se zyada rahe ya saans lene me dikkat ho."
        }
    },
    "Cough": {
        questions: [
            "Is it a dry cough or with phlegm/mucus? (Sukhi khansi hai ya balgam wali?)",
            "Does it worsen at night? (Kya raat me khansi badh jati hai?)",
            "Do you feel chest pain while coughing? (Kya khaste waqt seene me dard hota hai?)"
        ],
        en: {
            exercise_steps: "Avoid cardio. Do breathing exercises (Pranayama) gently.",
            precautions: "Avoid dusty areas and passive smoking. Keep your throat moist.",
            first_aid: ["Gargle with warm salt water.", "Use throat lozenges or cough syrup."],
            when_to_see_doctor: "If you cough up blood, have chest pain, or it lasts over 2 weeks."
        },
        hi: {
            exercise_steps: "Cardio na karein. Aaram se saans lene wale aasan (Pranayama) karein.",
            precautions: "Dhool wali jagah aur dhuyein se bachein. Gale ko sookhne na dein.",
            first_aid: ["Garam namak pani se garare karein.", "Gale ki kharash ki goli ya syrup lein."],
            when_to_see_doctor: "Agar khansi me khoon aaye, seene me dard ho, ya 2 hafte se zyada rahe."
        }
    },
    "Headache": {
        questions: [
            "Is the pain on one side of your head? (Kya dard sir ke ek hisse me hai?)",
            "Do you feel throbbing pain? (Kya dard dhak-dhak kar raha hai?)",
            "Is it accompanied by nausea or sensitivity to light? (Kya ulti ka man hai ya roshni chubh rahi hai?)"
        ],
        en: {
            exercise_steps: "Close your eyes and rest in a dark, quiet room. Avoid screen time.",
            precautions: "Reduce stress, stay hydrated, and don't skip meals.",
            first_aid: ["Massage your temples gently.", "Drink a glass of water, take a mild painkiller if needed."],
            when_to_see_doctor: "If it's the worst headache of your life, sudden, or accompanied by vision loss."
        },
        hi: {
            exercise_steps: "Aankhein band karke andhere aur shant kamre me aaram karein. Screen na dekhein.",
            precautions: "Tension kam karein, pani piyein, aur khana na chhodein.",
            first_aid: ["Sir par halke hatho se malish karein.", "Pani piyein, zaroorat ho to mild painkiller lein."],
            when_to_see_doctor: "Agar achanak bahut tez dard ho, ya dekhne me dikkat hone lage."
        }
    },
    "Stomach Ache": {
        questions: [
            "Is the pain sharp or dull cramping? (Dard tez chubhnewala hai ya marod wala?)",
            "Did you eat outside food recently? (Kya aapne haal hi me bahar ka khana khaya tha?)",
            "Is the pain focused on the lower right side? (Kya dard pet ke niche dahini taraf hai?)"
        ],
        en: {
            exercise_steps: "Lie down and pull your knees to your chest. Avoid abdominal workouts.",
            precautions: "Eat bland, easy-to-digest food (like Khichdi). Avoid spicy/oily food.",
            first_aid: ["Use a hot water bottle on your stomach.", "Drink ajwain (carom seeds) water."],
            when_to_see_doctor: "If pain is unbearable, lower right-sided, or accompanied by continuous vomiting."
        },
        hi: {
            exercise_steps: "Let kar ghutno ko seene ki taraf modein. Pet ki exercise na karein.",
            precautions: "Halka khana khayein (jaise Khichdi). Masaledar/tel wala khana na khayein.",
            first_aid: ["Pet par garam pani ki botal rakhein.", "Ajwain ka pani piyein."],
            when_to_see_doctor: "Agar dard sahan na ho, dahini taraf niche ho, ya lagatar ulti ho rahi ho."
        }
    },
    "Diarrhea": {
        questions: [
            "How many loose bowel movements have you had today? (Aaj kitni baar patli latrine hui hai?)",
            "Is there blood or mucus in your stool? (Kya latrine me khoon ya aaw aa raha hai?)",
            "Do you feel dizzy or very weak? (Kya chakkar ya bahut kamzori lag rahi hai?)"
        ],
        en: {
            exercise_steps: "Strict bed rest. Your body is losing energy rapidly.",
            precautions: "Avoid dairy products, caffeine, and solid heavy foods.",
            first_aid: ["Drink ORS (Oral Rehydration Solution) frequently.", "Eat bananas, rice, or toast."],
            when_to_see_doctor: "If it lasts more than 2 days, signs of severe dehydration, or black/bloody stool."
        },
        hi: {
            exercise_steps: "Sirf aaram karein. Body ki energy tezi se kam ho rahi hai.",
            precautions: "Doodh ki cheezein, chai/coffee aur bhari khana na khayein.",
            first_aid: ["Baar-baar ORS ka ghol piyein.", "Kela, chawal, ya toast khayein."],
            when_to_see_doctor: "Agar 2 din se zyada rahe, pani ki bhari kami ho, ya stool me khoon aaye."
        }
    },
    "Acidity": {
        questions: [
            "Do you feel a burning sensation in your chest? (Kya seene me jalan mehsoos ho rahi hai?)",
            "Does it happen after eating heavy meals? (Kya bhari khana khane ke baad aisa hota hai?)",
            "Do you feel a sour taste in your mouth? (Kya muh me khatta swaad aa raha hai?)"
        ],
        en: {
            exercise_steps: "Take a slow walk after meals. Do not lie down immediately.",
            precautions: "Avoid spicy, fried foods, and late-night dinners.",
            first_aid: ["Drink cold milk or coconut water.", "Take an antacid if the burning is severe."],
            when_to_see_doctor: "If acidity happens daily or you have difficulty swallowing."
        },
        hi: {
            exercise_steps: "Khane ke baad dheere-dheere tehlein. Turant na letein.",
            precautions: "Masaledar, tala hua khana aur raat ko der se khana avoid karein.",
            first_aid: ["Thanda doodh ya nariyal pani piyein.", "Jalan zyada ho to antacid lein."],
            when_to_see_doctor: "Agar roz acidity ho ya khana nikalne me dikkat ho."
        }
    },
    "Vomiting": {
        questions: [
            "Are you unable to keep any food or water down? (Kya kuch bhi khane-pine par ulti ho rahi hai?)",
            "Do you have a fever along with it? (Kya iske sath bukhar bhi hai?)",
            "Is the vomit greenish or yellow? (Kya ulti ka rang hara ya peela hai?)"
        ],
        en: {
            exercise_steps: "Rest in an upright or semi-upright position. No sudden movements.",
            precautions: "Do not eat solid food until vomiting stops for a few hours.",
            first_aid: ["Take small sips of clear fluids or ORS.", "Suck on a piece of ice or ginger."],
            when_to_see_doctor: "If you vomit blood, can't keep fluids down for 12 hours, or feel extremely dizzy."
        },
        hi: {
            exercise_steps: "Thoda seedha hokar ya takeeya lagakar letein. Achanak move na karein.",
            precautions: "Jab tak ulti ruk na jaye, thos (solid) khana na khayein.",
            first_aid: ["Thoda-thoda karke ORS ya saaf pani piyein.", "Baraf ka tukda ya adrak chusein."],
            when_to_see_doctor: "Agar ulti me khoon aaye, 12 ghante tak pani bhi na pache, ya chakkar aayein."
        }
    },
    "Sore Throat": {
        questions: [
            "Is it painful to swallow? (Kya kuch ghutne/nigalne me dard hota hai?)",
            "Is your voice hoarse? (Kya aapki aawaz baith gayi hai?)",
            "Do you see white patches on your tonsils? (Kya gale ke andar safed dhabbe dikh rahe hain?)"
        ],
        en: {
            exercise_steps: "Rest your voice. Avoid shouting or speaking loudly.",
            precautions: "Avoid cold drinks, ice cream, and sour foods.",
            first_aid: ["Gargle with warm salt water 3-4 times a day.", "Drink warm turmeric milk."],
            when_to_see_doctor: "If you have high fever, swollen lymph nodes, or trouble breathing."
        },
        hi: {
            exercise_steps: "Gale ko aaram dein. Zor se na bolein ya chillayein.",
            precautions: "Thande drinks, ice cream aur khatti cheezon se bachein.",
            first_aid: ["Din me 3-4 baar garam namak pani se garare karein.", "Garam haldi wala doodh piyein."],
            when_to_see_doctor: "Agar tez bukhar ho, gale me gath (swelling) ho, ya saans lene me dikkat ho."
        }
    },
    "Asthma": {
        questions: [
            "Are you wheezing or hearing a whistling sound while breathing? (Kya saans lete waqt seeti jaisi aawaz aa rahi hai?)",
            "Do you feel tightness in your chest? (Kya seene me jakdan mehsoos ho rahi hai?)",
            "Did dust or smoke trigger this? (Kya dhool ya dhuyein se ye shuru hua?)"
        ],
        en: {
            exercise_steps: "Sit upright immediately. Do not lie flat.",
            precautions: "Keep away from allergens, dust, smoke, and strong perfumes.",
            first_aid: ["Use your prescribed inhaler immediately.", "Stay calm and take slow, deep breaths."],
            when_to_see_doctor: "If inhaler doesn't work, lips turn blue, or you can't speak full sentences."
        },
        hi: {
            exercise_steps: "Turant seedhe baith jayein. Pura seedha na letein.",
            precautions: "Dhool, dhuyein, aur tez khushboo wali cheezon se door rahein.",
            first_aid: ["Apna prescribed inhaler turant use karein.", "Shant rahein aur dheere-dheere gehri saans lein."],
            when_to_see_doctor: "Agar inhaler kaam na kare, honth neele padne lagein, ya bolne me dikkat ho."
        }
    },
    "Back Pain": {
        questions: [
            "Is the pain in the lower back or upper back? (Kya dard kamar me niche hai ya upar?)",
            "Did you lift something heavy recently? (Kya aapne haal hi me kuch bhari uthaya tha?)",
            "Is the pain shooting down your leg? (Kya dard aapke pair tak ja raha hai?)"
        ],
        en: {
            exercise_steps: "Do gentle stretches like the Cat-Cow pose. Avoid heavy lifting.",
            precautions: "Maintain good posture. Don't sit in the same position for long.",
            first_aid: ["Apply a warm compress or ice pack.", "Rest on a firm mattress."],
            when_to_see_doctor: "If there's numbness in legs, loss of bowel control, or pain from an injury."
        },
        hi: {
            exercise_steps: "Halki stretching karein. Bhari saman bilkul na uthayein.",
            precautions: "Baithne ka tarika (posture) theek rakhein. Lagatar ek jagah na baithein.",
            first_aid: ["Garam ya thandi patti se sek karein.", "Sakht gadde (firm mattress) par letein."],
            when_to_see_doctor: "Agar pairo me sunn-pan ho, latrine/peshab par control na rahe, ya chot lagi ho."
        }
    },
    "Joint Pain": {
        questions: [
            "Are your joints swollen or red? (Kya jodo me sujan ya lalapan hai?)",
            "Is the pain worse in the morning? (Kya subah uthne par dard zyada hota hai?)",
            "Have you had a recent injury? (Kya haal hi me koi chot lagi thi?)"
        ],
        en: {
            exercise_steps: "Do low-impact exercises like swimming or cycling. Avoid running.",
            precautions: "Avoid putting excessive weight on the affected joint.",
            first_aid: ["Apply an ice pack to reduce swelling.", "Keep the joint elevated if possible."],
            when_to_see_doctor: "If the joint is completely immobile, deformed, or extremely swollen."
        },
        hi: {
            exercise_steps: "Tairna ya cycling jaisi low-impact exercise karein. Daudna avoid karein.",
            precautions: "Dard wale jodd par zyada vajan (weight) na dalein.",
            first_aid: ["Sujan kam karne ke liye baraf ki sikai karein.", "Ho sake to joint ko unchai par rakhein."],
            when_to_see_doctor: "Agar jodd bilkul hil na raha ho, aakar bigad gaya ho, ya bahut sujan ho."
        }
    },
    "Muscle Cramp": {
        questions: [
            "Did the cramp happen during or after exercise? (Kya nas exercise ke dauran ya baad me chadhi?)",
            "Is the muscle visibly tight or hard? (Kya mass-peshi sakht lag rahi hai?)",
            "Have you been drinking enough water today? (Kya aaj aapne paryapt pani piya hai?)"
        ],
        en: {
            exercise_steps: "Gently stretch and massage the cramping muscle.",
            precautions: "Stay hydrated and ensure you are getting enough electrolytes (salt/potassium).",
            first_aid: ["Apply a warm towel to the tense muscle.", "Drink ORS or coconut water."],
            when_to_see_doctor: "If cramps are severe, happen regularly without exercise, or don't go away."
        },
        hi: {
            exercise_steps: "Aaram se stretch karein aur dard wali mass-peshi ki malish karein.",
            precautions: "Pani pite rahein aur body me namak/potassium ki kami na hone dein.",
            first_aid: ["Sakht mass-peshi par garam tauliya rakhein.", "ORS ya nariyal pani piyein."],
            when_to_see_doctor: "Agar dard bahut tez ho, bina exercise ke bar-bar nas chadhe, ya theek na ho."
        }
    },
    "Toothache": {
        questions: [
            "Is the pain sharp and continuous? (Kya dard tez aur lagatar hai?)",
            "Are you sensitive to hot or cold drinks? (Kya garam ya thanda pine par jhunjhunahat hoti hai?)",
            "Is there swelling in your gums or face? (Kya masudo ya chehre par sujan hai?)"
        ],
        en: {
            exercise_steps: "Avoid strenuous exercise as it can increase blood flow and pain.",
            precautions: "Avoid very hot, cold, or sweet foods. Don't chew on the painful side.",
            first_aid: ["Rinse mouth with warm salt water.", "Apply clove oil (laung ka tel) to the tooth."],
            when_to_see_doctor: "If there is facial swelling, fever, or pain lasts more than 2 days."
        },
        hi: {
            exercise_steps: "Bhari exercise na karein kyunki isse blood flow aur dard badh sakta hai.",
            precautions: "Bahut garam, thandi ya meethi cheezein na khayein. Dard wali taraf se na chabayein.",
            first_aid: ["Garam namak pani se kulla karein.", "Daant par laung ka tel lagayein."],
            when_to_see_doctor: "Agar chehre par sujan ho, bukhar ho, ya dard 2 din se zyada rahe."
        }
    },
    "Earache": {
        questions: [
            "Is there any fluid or pus leaking from the ear? (Kya kaan se pani ya peep nikal raha hai?)",
            "Did you recently have a cold? (Kya haal hi me zukam hua tha?)",
            "Do you feel fullness or ringing in the ear? (Kya kaan bhari lag raha hai ya seeti baj rahi hai?)"
        ],
        en: {
            exercise_steps: "Rest in an upright posture to reduce ear pressure.",
            precautions: "Do NOT insert cotton swabs or any objects into the ear. Keep water out.",
            first_aid: ["Hold a warm washcloth against the ear.", "Chew gum to relieve pressure."],
            when_to_see_doctor: "If there is pus/blood discharge, hearing loss, or high fever."
        },
        hi: {
            exercise_steps: "Kaan par pressure kam karne ke liye thoda seedha hokar aaram karein.",
            precautions: "Kaan me earbud ya koi cheez na dalein. Kaan me pani na jane dein.",
            first_aid: ["Kaan ke paas garam kapda rakhein.", "Pressure kam karne ke liye chewing gum chabayein."],
            when_to_see_doctor: "Agar kaan se peep/khoon aaye, sunai kam de, ya tez bukhar ho."
        }
    },
    "Conjunctivitis": {
        questions: [
            "Are your eyes red and itchy? (Kya aankhein lal hain aur khujli ho rahi hai?)",
            "Is there a sticky yellow/green discharge? (Kya aankho se chipchipa peela/hara pani nikal raha hai?)",
            "Do your eyes feel crusty in the morning? (Kya subah uthne par aankhein chipki hoti hain?)"
        ],
        en: {
            exercise_steps: "Rest your eyes. Avoid screens entirely.",
            precautions: "Do not touch or rub your eyes. Wash hands frequently. Do not share towels.",
            first_aid: ["Wipe eyes gently with clean cotton soaked in warm water.", "Use artificial tears drops."],
            when_to_see_doctor: "If vision becomes blurry, intense eye pain, or sensitivity to light."
        },
        hi: {
            exercise_steps: "Aankhon ko aaram dein. Screen bilkul na dekhein.",
            precautions: "Aankhon ko haath na lagayein ya ragdein nahi. Haath baar-baar dhoyein. Tauliya share na karein.",
            first_aid: ["Garam pani me bheegi saaf rui se aankhein halke se ponche.", "Lubricating eye drops dalein."],
            when_to_see_doctor: "Agar dhundhla dikhe, aankh me tez dard ho, ya roshni chubhne lage."
        }
    },
    "Skin Rash": {
        questions: [
            "Is the rash red, itchy, or raised? (Kya rash lal, khujli wala ya ubhra hua hai?)",
            "Did you try a new soap, lotion, or eat something new? (Kya koi naya sabun, cream ya khana try kiya tha?)",
            "Is it spreading rapidly? (Kya ye tezi se fail raha hai?)"
        ],
        en: {
            exercise_steps: "Avoid sweating heavily as it can irritate the rash.",
            precautions: "Wear loose cotton clothes. Avoid scratching the area.",
            first_aid: ["Apply aloe vera gel or calamine lotion.", "Take a cool bath."],
            when_to_see_doctor: "If the rash covers the whole body, accompanies breathing issues, or has pus."
        },
        hi: {
            exercise_steps: "Zyada pasina aane wale kaam na karein, isse khujli badhegi.",
            precautions: "Dheele sooti (cotton) kapde pehne. Rash ko khujlayein nahi.",
            first_aid: ["Aloe vera gel ya calamine lotion lagayein.", "Thande pani se nahayein."],
            when_to_see_doctor: "Agar rash pure badan par fail jaye, saans lene me dikkat ho, ya peep pad jaye."
        }
    },
    "Sunburn": {
        questions: [
            "Is your skin red, hot to the touch, and painful? (Kya skin lal, garam aur dardnaak hai?)",
            "Are there any blisters forming? (Kya chhale ban rahe hain?)",
            "Were you out in the direct sun for a long time? (Kya aap kadi dhoop me der tak the?)"
        ],
        en: {
            exercise_steps: "Stay indoors. Do not exercise out in the sun.",
            precautions: "Avoid further sun exposure until healed. Do not pop blisters.",
            first_aid: ["Apply pure aloe vera gel.", "Take a cool shower and moisturize."],
            when_to_see_doctor: "If severe blisters cover a large area, or you have fever and confusion."
        },
        hi: {
            exercise_steps: "Ghar ke andar rahein. Dhoop me exercise na karein.",
            precautions: "Jab tak theek na ho, dhoop me na jayein. Chhalo ko fodein nahi.",
            first_aid: ["Pure aloe vera gel lagayein.", "Thande pani se nahayein aur moisturizer lagayein."],
            when_to_see_doctor: "Agar bade hisse me chhale pad jayein, ya bukhar aur chakkar aayein."
        }
    },
    "Heat Stroke": {
        questions: [
            "Are you feeling dizzy, confused, or nauseous? (Kya chakkar, ghabrahat ya ulti jaisa lag raha hai?)",
            "Is your skin hot and dry without sweat? (Kya body garam hai aur pasina nahi aa raha?)",
            "Is your heart beating very fast? (Kya dil ki dhadkan bahut tez hai?)"
        ],
        en: {
            exercise_steps: "Stop all activities immediately. Lie down in a cool, shaded area.",
            precautions: "Do not drink ice-cold water instantly; sip cool water slowly.",
            first_aid: ["Move to an AC room or fan. Apply wet sponges to neck and armpits.", "Elevate your feet."],
            when_to_see_doctor: "Immediate emergency: If the person faints, has seizures, or stops sweating."
        },
        hi: {
            exercise_steps: "Sab kaam turant rok dein. Thandi chaav me let jayein.",
            precautions: "Ekdam se barf ka pani na piyein; dheere-dheere thanda pani piyein.",
            first_aid: ["AC ya fan ke paas jayein. Gale aur underarms par gila kapda rakhein.", "Pair thode unche rakhein."],
            when_to_see_doctor: "Emergency: Agar behosh ho jayein, daure padein, ya pasina aana band ho jaye."
        }
    },
    "Dehydration": {
        questions: [
            "Is your mouth very dry and are you extremely thirsty? (Kya muh sookh raha hai aur bahut pyaas lag rahi hai?)",
            "Is your urine dark yellow? (Kya peshab dark peele rang ka aa raha hai?)",
            "Do you feel lightheaded or dizzy? (Kya sir ghoom raha hai?)"
        ],
        en: {
            exercise_steps: "Rest in a cool place. Avoid moving too quickly.",
            precautions: "Do not consume caffeine or alcohol, as they worsen dehydration.",
            first_aid: ["Drink water in small sips.", "Consume ORS, coconut water, or lemon water with salt."],
            when_to_see_doctor: "If you cannot keep fluids down, haven't urinated in 8 hours, or are confused."
        },
        hi: {
            exercise_steps: "Thandi jagah par aaram karein. Achanak move na karein.",
            precautions: "Chai/coffee ya alcohol bilkul na lein, isse dehydration badhegi.",
            first_aid: ["Thoda-thoda karke pani piyein.", "ORS, nariyal pani ya namak-nimbu pani piyein."],
            when_to_see_doctor: "Agar pani hazam na ho, 8 ghante se peshab na aaye, ya behoshi chhaaye."
        }
    },
    "Low BP": {
        questions: [
            "Do you feel dizzy when you stand up suddenly? (Kya achanak khade hone par chakkar aate hain?)",
            "Is your vision blurring temporarily? (Kya kuch der ke liye dhundhla dikh raha hai?)",
            "Do you feel unusually weak or tired? (Kya ajeeb si thakan ya kamzori hai?)"
        ],
        en: {
            exercise_steps: "Lie down and elevate your legs above heart level. Rise slowly.",
            precautions: "Avoid long periods of standing and sudden position changes.",
            first_aid: ["Drink a glass of salt water or electoral.", "Eat something salty immediately."],
            when_to_see_doctor: "If you faint, or if it happens frequently."
        },
        hi: {
            exercise_steps: "Let jayein aur pairo ko dil (heart) ke level se uncha rakhein. Aaram se uthein.",
            precautions: "Der tak khade na rahein aur achanak position na badlein.",
            first_aid: ["Namak-chini ka pani ya electoral piyein.", "Turant kuch namkeen khayein."],
            when_to_see_doctor: "Agar aap behosh ho jayein, ya ye baar-baar hone lage."
        }
    },
    "High BP": {
        questions: [
            "Do you have a heavy, pounding headache? (Kya sir me bhari aur dhak-dhak wala dard hai?)",
            "Are you experiencing shortness of breath? (Kya saans ful rahi hai?)",
            "Is there any ringing in your ears? (Kya kano me seeti baj rahi hai?)"
        ],
        en: {
            exercise_steps: "Sit calmly. Deep breathing exercises (Pranayama) help lower stress.",
            precautions: "Strictly avoid salt, caffeine, and stress.",
            first_aid: ["Sit in a quiet room and try to relax.", "Take your prescribed BP medication."],
            when_to_see_doctor: "If BP crosses 180/120, accompanied by chest pain, or vision changes."
        },
        hi: {
            exercise_steps: "Shanti se baithein. Gehri saans (Pranayama) lene se tension kam hoti hai.",
            precautions: "Namak, chai/coffee aur tension bilkul chhod dein.",
            first_aid: ["Shant kamre me baithein aur relax karne ki koshish karein.", "Apni prescribed BP ki dawa lein."],
            when_to_see_doctor: "Agar BP 180/120 cross kare, seene me dard ho, ya dekhne me dikkat ho."
        }
    },
    "Low Sugar": {
        questions: [
            "Are your hands shaking or trembling? (Kya aapke hath kaanp rahe hain?)",
            "Are you sweating profusely despite a cool environment? (Kya thand me bhi pasina aa raha hai?)",
            "Do you feel sudden, intense hunger? (Kya achanak bahut tez bhookh lag rahi hai?)"
        ],
        en: {
            exercise_steps: "Sit down immediately. Do not walk or exercise until stabilized.",
            precautions: "Do not skip meals, especially if you are diabetic.",
            first_aid: ["Eat a piece of candy, a spoonful of sugar, or drink fruit juice.", "Recheck sugar after 15 mins."],
            when_to_see_doctor: "If the person becomes unconscious or sugar level doesn't improve after eating."
        },
        hi: {
            exercise_steps: "Turant baith jayein. Jab tak theek na lage, chalein ya exercise na karein.",
            precautions: "Khana na chhodein, khaskar agar aapko diabetes hai.",
            first_aid: ["Ek toffee, ek chammach chini khayein, ya fruit juice piyein.", "15 minute baad sugar check karein."],
            when_to_see_doctor: "Agar insaan behosh ho jaye ya meetha khane par bhi sugar normal na ho."
        }
    },
    "Weakness": {
        questions: [
            "Do you feel exhausted even after resting? (Kya aaram ke baad bhi thakan lagti hai?)",
            "Is your body feeling heavy? (Kya body bhari-bhari lag rahi hai?)",
            "Are you sleeping well at night? (Kya raat me neend achi aa rahi hai?)"
        ],
        en: {
            exercise_steps: "Take it easy. Light walking is okay, but avoid weightlifting.",
            precautions: "Ensure you are eating a balanced diet with enough protein and iron.",
            first_aid: ["Drink a glass of warm milk or ORS.", "Eat a banana or an apple."],
            when_to_see_doctor: "If weakness persists for weeks, or is accompanied by unexplained weight loss."
        },
        hi: {
            exercise_steps: "Aaram se kaam lein. Halka tehalna theek hai, par vajan uthane wale kaam na karein.",
            precautions: "Dhyan rahe ki aap protein aur iron wali achi diet le rahe hain.",
            first_aid: ["Garam doodh ka glass ya ORS piyein.", "Kela ya seb khayein."],
            when_to_see_doctor: "Agar kamzori hafto tak rahe, ya bina karan vajan kam hone lage."
        }
    },
    "Vertigo": {
        questions: [
            "Does it feel like the room is spinning? (Kya aisa lag raha hai ki kamra ghoom raha hai?)",
            "Does changing your head position trigger it? (Kya sir hilane par chakkar badhte hain?)",
            "Do you feel nauseous along with the spinning? (Kya chakkar ke sath ulti jaisa lag raha hai?)"
        ],
        en: {
            exercise_steps: "Sit or lie down immediately when you feel dizzy. Do not walk.",
            precautions: "Avoid sudden head movements. Sleep with your head slightly elevated.",
            first_aid: ["Focus on a stationary object.", "Sit in a dark, quiet room."],
            when_to_see_doctor: "If vertigo lasts for hours, or is accompanied by hearing loss or weakness in limbs."
        },
        hi: {
            exercise_steps: "Chakkar aate hi turant baith ya let jayein. Chalein nahi.",
            precautions: "Achanak sir na hilayein. Sote waqt sir thoda uncha rakhein.",
            first_aid: ["Kisi ek ruki hui cheez par dhyan lagayein.", "Shant aur andhere kamre me baithein."],
            when_to_see_doctor: "Agar chakkar ghanto tak rahe, sunne me dikkat ho, ya hath-pair me kamzori lage."
        }
    },
    "Insomnia": {
        questions: [
            "Do you have trouble falling asleep at night? (Kya raat ko neend aane me dikkat hoti hai?)",
            "Do you wake up multiple times during the night? (Kya raat me baar-baar neend khulti hai?)",
            "Do you feel unrefreshed in the morning? (Kya subah uthne par fresh feel nahi hota?)"
        ],
        en: {
            exercise_steps: "Exercise regularly during the day, but not within 3 hours of bedtime.",
            precautions: "Avoid screens (phones/laptops) and caffeine at least 1 hour before bed.",
            first_aid: ["Drink warm milk with a pinch of nutmeg (jaiphal).", "Read a physical book."],
            when_to_see_doctor: "If lack of sleep affects your daily life for more than 3 weeks."
        },
        hi: {
            exercise_steps: "Din me roz exercise karein, par sone se 3 ghante pehle exercise na karein.",
            precautions: "Sone se kam se kam 1 ghanta pehle mobile/laptop aur chai/coffee chhod dein.",
            first_aid: ["Halka garam doodh chutki bhar jaiphal daal kar piyein.", "Koi kitaab (book) padhein."],
            when_to_see_doctor: "Agar neend na aane ki wajah se aapka routine 3 hafte se zyada disturb ho."
        }
    },
    "Anxiety": {
        questions: [
            "Is your heart racing for no apparent reason? (Kya bina baat ke dil ki dhadkan tez hai?)",
            "Do you feel a sense of impending doom or panic? (Kya bahut darr ya ghabrahat lag rahi hai?)",
            "Are you sweating or shaking? (Kya pasina aa raha hai ya hath kaanp rahe hain?)"
        ],
        en: {
            exercise_steps: "Do grounding exercises like the 5-4-3-2-1 method. Focus on deep breathing.",
            precautions: "Cut down on caffeine completely. Don't isolate yourself.",
            first_aid: ["Sit down, take slow deep breaths (inhale 4s, hold 4s, exhale 4s).", "Splash cold water on your face."],
            when_to_see_doctor: "If panic attacks happen frequently or interfere with daily activities."
        },
        hi: {
            exercise_steps: "Ghabrahat kam karne wali exercise karein. Gehri saans lene par dhyan dein.",
            precautions: "Chai/coffee bilkul chhod dein. Akele na rahein, kisi se baat karein.",
            first_aid: ["Baith jayein, aaram se gehri saans lein (4s andar, 4s hold, 4s bahar).", "Chehre par thande pani ke chheente maarein."],
            when_to_see_doctor: "Agar panic attack baar-baar aayein ya daily life me problem aane lage."
        }
    },
    "Menstrual Cramps": {
        questions: [
            "Are you experiencing throbbing pain in your lower abdomen? (Kya pet ke nichle hisse me tez dard hai?)",
            "Is the pain radiating to your lower back or thighs? (Kya dard kamar aur jango tak ja raha hai?)",
            "Do you feel nauseous or have loose stools? (Kya ulti jaisa lag raha hai ya dast hain?)"
        ],
        en: {
            exercise_steps: "Light stretching and yoga (like Child's Pose) can relieve pain. Avoid intense cardio.",
            precautions: "Avoid salty foods and caffeine, which can increase bloating.",
            first_aid: ["Apply a heating pad to your lower abdomen.", "Drink warm ginger or chamomile tea."],
            when_to_see_doctor: "If pain is so severe you can't get out of bed, or bleeding is unusually heavy."
        },
        hi: {
            exercise_steps: "Halki stretching aur yoga se dard kam ho sakta hai. Bhari exercise na karein.",
            precautions: "Namkeen cheezein aur chai/coffee kam lein, inse pet fulta hai.",
            first_aid: ["Pet ke nichle hisse par garam paani ki botal rakhein.", "Garam adrak wali chai piyein."],
            when_to_see_doctor: "Agar dard itna ho ki bed se na utha jaye, ya bleeding bahut zyada ho."
        }
    },
    "UTI": {
        questions: [
            "Do you feel a burning sensation when urinating? (Kya peshab karte waqt jalan hoti hai?)",
            "Do you feel the urge to urinate frequently, but pass very little? (Kya baar-baar peshab aane jaisa lagta hai par hota kam hai?)",
            "Is your urine cloudy or strong-smelling? (Kya peshab dhundhla ya tez badbu wala hai?)"
        ],
        en: {
            exercise_steps: "Rest. Avoid sweaty exercises tight clothing that traps moisture.",
            precautions: "Maintain personal hygiene. Do not hold your urine.",
            first_aid: ["Drink plenty of water to flush out bacteria.", "Drink unsweetened cranberry juice."],
            when_to_see_doctor: "If you have back/flank pain, high fever, or see blood in urine."
        },
        hi: {
            exercise_steps: "Aaram karein. Pasine wali exercise aur tight kapde na pehne.",
            precautions: "Saaf-safai ka dhyan rakhein. Peshab ko rokein nahi.",
            first_aid: ["Bacteria nikalne ke liye khub pani piyein.", "Bina chini wala cranberry juice piyein."],
            when_to_see_doctor: "Agar kamar me dard ho, tez bukhar ho, ya peshab me khoon aaye."
        }
    },
    "Kidney Stones": {
        questions: [
            "Are you experiencing severe, sharp pain in your back or side? (Kya kamar ya side me bahut tez, chubhnewala dard hai?)",
            "Does the pain come in waves and fluctuate in intensity? (Kya dard ruk-ruk kar aur tez hota hai?)",
            "Is it painful to urinate? (Kya peshab karte waqt dard hota hai?)"
        ],
        en: {
            exercise_steps: "Light walking might help pass small stones, but stop if pain worsens.",
            precautions: "Cut down on salt, animal protein, and oxalate-rich foods (spinach, nuts).",
            first_aid: ["Drink a massive amount of water (2-3 liters).", "Use a heating pad on the painful side."],
            when_to_see_doctor: "If pain is intolerable, accompanied by fever, vomiting, or blood in urine."
        },
        hi: {
            exercise_steps: "Halka tehalna chhoti pathri nikalne me madad kar sakta hai, par dard badhe to ruk jayein.",
            precautions: "Namak, meat, aur palak/dry-fruits (oxalate) kam khayein.",
            first_aid: ["Bahut sara pani piyein (2-3 liter).", "Dard wali jagah par garam patti se sek karein."],
            when_to_see_doctor: "Agar dard bardasht ke bahar ho, bukhar, ulti ya peshab me khoon aaye."
        }
    },
    "Dengue": {
        questions: [
            "Do you have a sudden, high fever (often up to 104°F)? (Kya achanak bahut tez bukhar hua hai?)",
            "Are you experiencing severe muscle, joint, or bone pain (breakbone fever)? (Kya haddiyon aur mass-peshiyon me tutne jaisa dard hai?)",
            "Do you have a rash or pain behind your eyes? (Kya aankhon ke peeche dard ya skin par daane hain?)"
        ],
        en: {
            exercise_steps: "Absolute bed rest. Physical exertion can severely worsen your condition.",
            precautions: "Avoid Aspirin or Ibuprofen; use only Paracetamol for fever. Protect from mosquito bites.",
            first_aid: ["Drink lots of fluids (ORS, coconut water, papaya leaf extract).", "Take Paracetamol and rest."],
            when_to_see_doctor: "If there is bleeding from gums/nose, severe abdominal pain, or continuous vomiting."
        },
        hi: {
            exercise_steps: "Pura aaram (bed rest) karein. Mehnat wale kaam bilkul na karein.",
            precautions: "Bukhar ke liye sirf Paracetamol lein, Aspirin/Ibuprofen na lein. Machharon se bachein.",
            first_aid: ["Khub liquid piyein (ORS, nariyal pani, papite ke patto ka ras).", "Paracetamol lein aur aaram karein."],
            when_to_see_doctor: "Agar masudo/naak se khoon aaye, pet me tez dard ho, ya lagatar ulti ho."
        }
    },
    "Malaria": {
        questions: [
            "Are you experiencing extreme chills followed by high fever? (Kya kapkapi chhutne ke baad tez bukhar aata hai?)",
            "Does the fever come down with intense sweating? (Kya bukhar bahut pasine ke sath utarta hai?)",
            "Do you feel fatigued and nauseous? (Kya bahut thakan aur ulti jaisa mehsoos ho raha hai?)"
        ],
        en: {
            exercise_steps: "Complete bed rest. Keep warm during the chilling phase.",
            precautions: "Use mosquito nets and repellents. Do not skip meals despite nausea.",
            first_aid: ["Cover yourself well when shivering.", "Take prescribed antimalarial medicine after blood test."],
            when_to_see_doctor: "Immediately after suspecting Malaria to get a blood test (smear test)."
        },
        hi: {
            exercise_steps: "Pura bed rest karein. Jab thand lage to acche se odh kar rahein.",
            precautions: "Machhardani lagayein. Ulti ka man hone par bhi khana na chhodein.",
            first_aid: ["Kapkapi hone par acche se cover ho jayein.", "Blood test ke baad doctor ki di hui dawa lein."],
            when_to_see_doctor: "Malaria ka shaq hote hi turant blood test karwane ke liye doctor ke paas jayein."
        }
    },
    "Typhoid": {
        questions: [
            "Do you have a prolonged fever that increases gradually? (Kya bukhar dheere-dheere badh raha hai aur utar nahi raha?)",
            "Are you experiencing stomach pain and weakness? (Kya pet me dard aur kamzori lag rahi hai?)",
            "Do you have a loss of appetite? (Kya bhookh lagna band ho gayi hai?)"
        ],
        en: {
            exercise_steps: "Strict bed rest for several weeks until cleared by a doctor.",
            precautions: "Eat very hygienic, boiled food. Avoid raw vegetables and outside water.",
            first_aid: ["Stay hydrated with boiled and cooled water.", "Eat soft, easily digestible foods like porridge."],
            when_to_see_doctor: "If fever lasts more than 3-5 days, requires an immediate blood test (Widal test)."
        },
        hi: {
            exercise_steps: "Jab tak doctor na kahe, tab tak kayi hafto ke liye strict bed rest karein.",
            precautions: "Sirf ubla hua aur saaf khana khayein. Kacchi sabziyan aur bahar ka pani na piyein.",
            first_aid: ["Ubla hua pani peete rahein.", "Halka aur aaram se pachne wala khana (jaise daliya) khayein."],
            when_to_see_doctor: "Agar bukhar 3-5 din se zyada chale, turant Widal test karwayein."
        }
    },
    "Jaundice": {
        questions: [
            "Have your eyes or skin turned yellowish? (Kya aapki aankhein ya skin peeli pad gayi hain?)",
            "Is your urine very dark and stool pale-colored? (Kya peshab bahut dark aur latrine halke rang ki hai?)",
            "Do you feel extreme fatigue and loss of appetite? (Kya bahut thakan aur bhookh na lagne jaisi samasya hai?)"
        ],
        en: {
            exercise_steps: "Complete rest. The liver needs time to heal.",
            precautions: "Strictly avoid oil, spicy food, outside food, and alcohol.",
            first_aid: ["Drink sugarcane juice and consume radish leaves extract.", "Eat a completely fat-free boiled diet."],
            when_to_see_doctor: "Immediately upon noticing yellowing of eyes/skin for liver function tests."
        },
        hi: {
            exercise_steps: "Pura aaram karein. Liver ko theek hone ke liye waqt chahiye.",
            precautions: "Tel, masale, bahar ka khana aur alcohol bilkul chhod dein.",
            first_aid: ["Ganne ka ras piyein aur mooli ke patto ka ras lein.", "Bina tel wala ubla khana khayein."],
            when_to_see_doctor: "Aankhein ya skin peeli dikhte hi turant doctor ko dikhayein aur liver test karwayein."
        }
    },
    "Tonsillitis": {
        questions: [
            "Are your tonsils red and swollen? (Kya aapke tonsils lal aur suje hue hain?)",
            "Is swallowing very painful? (Kya kuch bhi nigalne me bahut dard ho raha hai?)",
            "Do you have bad breath and fever? (Kya muh se badbu aa rahi hai aur bukhar hai?)"
        ],
        en: {
            exercise_steps: "Rest and avoid speaking loudly.",
            precautions: "Avoid cold items (ice cream, cold water) and sour foods.",
            first_aid: ["Gargle with warm salt water frequently.", "Suck on throat lozenges."],
            when_to_see_doctor: "If you have difficulty breathing, or white pus spots are visible on tonsils."
        },
        hi: {
            exercise_steps: "Aaram karein aur zor se bolne se bachein.",
            precautions: "Thandi (ice cream, thanda pani) aur khatti cheezein na khayein.",
            first_aid: ["Garam namak pani se baar-baar garare karein.", "Gale ki kharash wali goli chusein."],
            when_to_see_doctor: "Agar saans lene me dikkat ho, ya tonsils par safed peep ke dhabbe dikhein."
        }
    },
    "Sinusitis": {
        questions: [
            "Do you have a throbbing pain around your eyes, cheeks, or forehead? (Kya aankhon, gaalo ya mathe ke paas dhak-dhak wala dard hai?)",
            "Is your nose heavily congested with thick mucus? (Kya naak puri tarah band hai aur gaadha balgam hai?)",
            "Does the pain worsen when you bend forward? (Kya aage jhukne par dard badh jata hai?)"
        ],
        en: {
            exercise_steps: "Avoid swimming and diving. Light walking is fine.",
            precautions: "Avoid sudden temperature changes and dusty environments.",
            first_aid: ["Inhale steam multiple times a day.", "Use a warm compress on your face."],
            when_to_see_doctor: "If symptoms last more than 10 days, or you have a high fever."
        },
        hi: {
            exercise_steps: "Swimming na karein. Halka tehalna theek hai.",
            precautions: "Achanak thandi/garam jagah aane-jane aur dhool se bachein.",
            first_aid: ["Din me kayi baar bhaap lein.", "Chehre par garam patti se sek karein."],
            when_to_see_doctor: "Agar lakshan 10 din se zyada rahein, ya tez bukhar ho."
        }
    },
    "Motion Sickness": {
        questions: [
            "Do you feel nauseous while travelling in a car or bus? (Kya gaadi ya bus me safar karte waqt ulti aati hai?)",
            "Are you sweating cold or feeling dizzy during the ride? (Kya safar me thanda pasina aur chakkar aa raha hai?)",
            "Does looking at your phone make it worse? (Kya phone dekhne par ulti zyada aati hai?)"
        ],
        en: {
            exercise_steps: "No exercise needed. Focus your eyes on the horizon.",
            precautions: "Avoid reading or looking at screens while travelling.",
            first_aid: ["Chew ginger candy or mint.", "Sit in the front seat and roll down the window."],
            when_to_see_doctor: "Usually not required, consult if it prevents you from travelling completely."
        },
        hi: {
            exercise_steps: "Koi exercise nahi. Apni nazarein khidki ke bahar door tak gadaye rakhein.",
            precautions: "Safar ke dauran phone na dekhein aur kuch na padhein.",
            first_aid: ["Adrak wali toffee ya pudina chabayein.", "Aage ki seat par baithein aur khidki khuli rakhein."],
            when_to_see_doctor: "Aam taur par zaroorat nahi hoti, agar safar karna asambhav ho jaye to doctor se puchein."
        }
    },
    "Hangover": {
        questions: [
            "Did you consume alcohol the previous night? (Kya kal raat aapne alcohol piya tha?)",
            "Do you have a pounding headache and nausea? (Kya sir fat raha hai aur ulti ka man hai?)",
            "Are you very thirsty and sensitive to light? (Kya bahut pyaas lag rahi hai aur roshni chubh rahi hai?)"
        ],
        en: {
            exercise_steps: "Rest. Do not do heavy workouts as you are dehydrated.",
            precautions: "Do NOT drink more alcohol to cure it ('hair of the dog' is a myth).",
            first_aid: ["Drink lots of water, lemon water, or coconut water.", "Eat a light, carb-rich meal like toast."],
            when_to_see_doctor: "If you cannot keep water down for 24 hours."
        },
        hi: {
            exercise_steps: "Aaram karein. Bhari workout na karein kyunki body me pani ki kami hai.",
            precautions: "Isko theek karne ke liye aur sharab na piyein (ye galat tarika hai).",
            first_aid: ["Khub pani, nimbu pani ya nariyal pani piyein.", "Halka khana jaise toast khayein."],
            when_to_see_doctor: "Agar 24 ghante tak pani bhi na pache aur ulti hoti rahe."
        }
    },
    "Minor Burn": {
        questions: [
            "Is the burned skin red, painful, and without large blisters? (Kya jali hui skin lal, dardnaak hai par bade chhale nahi hain?)",
            "Did it happen from hot liquid, steam, or a hot object? (Kya ye garam pani, bhaap ya kisi garam cheez se jala hai?)",
            "Is the area smaller than your hand? (Kya jalne wala hissa aapke haath se chhota hai?)"
        ],
        en: {
            exercise_steps: "Avoid moving the burned area too much to prevent skin stretching.",
            precautions: "Do NOT apply ice, butter, or toothpaste on the burn.",
            first_aid: ["Hold the burn under cool (not cold) running water for 10-15 mins.", "Apply aloe vera gel or a sterile burn ointment."],
            when_to_see_doctor: "If the burn is on the face, hands, or genitals, or if it blisters severely."
        },
        hi: {
            exercise_steps: "Jale hue hisse ko zyada na hilayein taki skin na khinche.",
            precautions: "Jale par baraf, makkhan ya toothpaste BILKUL na lagayein.",
            first_aid: ["Jale hue hisse ko 10-15 minute tak thande (na ki baraf wale) behte pani ke niche rakhein.", "Aloe vera gel ya jalne ki cream lagayein."],
            when_to_see_doctor: "Agar chehre, haatho ya private parts par jala ho, ya bade chhale pad jayein."
        }
    },
    "Cut or Wound": {
        questions: [
            "Is the cut bleeding actively? (Kya chot se lagatar khoon beh raha hai?)",
            "Was the cut caused by a rusty or dirty object? (Kya chot kisi jung lagi ya gandi cheez se lagi hai?)",
            "Is the wound deep or gaping open? (Kya ghaav gehra hai ya khul gaya hai?)"
        ],
        en: {
            exercise_steps: "Keep the injured part elevated. Do not exercise that body part.",
            precautions: "Do not blow on the wound. Wash hands before touching it.",
            first_aid: ["Apply firm pressure with a clean cloth to stop bleeding.", "Clean with water, apply antiseptic, and bandage it."],
            when_to_see_doctor: "If bleeding doesn't stop after 10 mins, or you need a Tetanus shot."
        },
        hi: {
            exercise_steps: "Chot wale hisse ko thoda uncha rakhein. Us hisse ki exercise na karein.",
            precautions: "Ghaav par foonk na maarein. Chhune se pehle haath dhoyein.",
            first_aid: ["Khoon rokne ke liye saaf kapde se daba kar rakhein.", "Pani se saaf karein, Dettol/Savlon lagayein aur patti bandhein."],
            when_to_see_doctor: "Agar 10 minute baad bhi khoon na ruke, ya Tetanus ka injection lagwana ho."
        }
    },
    "Nosebleed": {
        questions: [
            "Is blood flowing mostly from one nostril? (Kya khoon zyada karke ek naak se aa raha hai?)",
            "Did you pick your nose or suffer a hit to the face? (Kya naak me ungli daali thi ya chehre par chot lagi hai?)",
            "Is the weather very dry and hot? (Kya mausam bahut sookha aur garam hai?)"
        ],
        en: {
            exercise_steps: "Sit up straight. Do not lie flat or engage in physical activity.",
            precautions: "Do NOT tilt your head back; blood will go down your throat. Don't blow your nose.",
            first_aid: ["Lean slightly forward and pinch the soft part of your nose for 10-15 mins.", "Breathe through your mouth."],
            when_to_see_doctor: "If bleeding lasts longer than 20 mins or occurs frequently."
        },
        hi: {
            exercise_steps: "Seedhe baithein. Lete nahi aur koi mehnat wala kaam na karein.",
            precautions: "Sir peeche ki taraf NA jhukayein; khoon gale me chala jayega. Naak na chhidkein.",
            first_aid: ["Thoda aage jhukein aur naak ke aage wale naram hisse ko 10-15 minute tak daba kar rakhein.", "Muh se saans lein."],
            when_to_see_doctor: "Agar 20 minute baad bhi khoon na ruke ya baar-baar nakseer phute."
        }
    },
    "Sprain": {
        questions: [
            "Did you twist your ankle or joint recently? (Kya aapka takhna ya jodd mud gaya tha?)",
            "Is the area swollen and bruised (turned blue/black)? (Kya sujan hai aur neela pad gaya hai?)",
            "Is it painful to put weight on it? (Kya uspe vajan dalne par dard hota hai?)"
        ],
        en: {
            exercise_steps: "Complete rest for the affected joint. No walking on a sprained ankle.",
            precautions: "Follow the R.I.C.E. rule (Rest, Ice, Compression, Elevation).",
            first_aid: ["Apply an ice pack wrapped in a cloth for 15-20 mins.", "Wrap it with a crepe bandage."],
            when_to_see_doctor: "If you cannot bear any weight, or the joint looks deformed."
        },
        hi: {
            exercise_steps: "Chot wale jodd ko pura aaram dein. Moch wale pairo par na chalein.",
            precautions: "R.I.C.E. rule (Aaram, Baraf, Patti, Unchai) follow karein.",
            first_aid: ["Kapde me lapet kar baraf ki sikai karein (15-20 min).", "Garam patti (crepe bandage) bandhein."],
            when_to_see_doctor: "Agar uspe bilkul vajan na dala jaye, ya jodd ka aakar bigad gaya ho."
        }
    },
    "Food Poisoning": {
        questions: [
            "Did you eat outside or leftover food in the last 24 hours? (Kya aapne pichle 24 ghante me bahar ka ya bacha hua khana khaya tha?)",
            "Are you experiencing severe stomach cramps, vomiting, and diarrhea together? (Kya pet me tez marod, ulti aur dast ek sath hain?)",
            "Do you feel feverish and weak? (Kya bukhar aur kamzori lag rahi hai?)"
        ],
        en: {
            exercise_steps: "Strict bed rest. Your body needs energy to fight the infection.",
            precautions: "Do not eat solid foods for a few hours. Avoid dairy entirely.",
            first_aid: ["Drink clear fluids or ORS consistently.", "Rest and allow the stomach to settle."],
            when_to_see_doctor: "If symptoms are severe, lasting over 2 days, or you see blood in vomit/stool."
        },
        hi: {
            exercise_steps: "Pura aaram karein. Body ko infection se ladne ke liye energy chahiye.",
            precautions: "Kuch ghante tak thos (solid) khana na khayein. Doodh wali cheezein bilkul na lein.",
            first_aid: ["Lagatar ORS ya saaf pani piyein.", "Aaram karein aur pet ko theek hone dein."],
            when_to_see_doctor: "Agar lakshan bahut tez hon, 2 din se zyada rahein, ya ulti/latrine me khoon aaye."
        }
    },
    "Constipation": {
        questions: [
            "Have you passed stool less than 3 times this week? (Kya is hafte 3 baar se kam latrine hui hai?)",
            "Are your stools hard, dry, or difficult to pass? (Kya latrine bahut sakht aur nikalne me dikkat ho rahi hai?)",
            "Do you feel bloated or have abdominal pain? (Kya pet fula hua aur dard hai?)"
        ],
        en: {
            exercise_steps: "Do core exercises and brisk walking to stimulate bowel movement.",
            precautions: "Avoid processed fast foods and lack of water.",
            first_aid: ["Drink a large glass of warm water first thing in the morning.", "Eat fiber-rich foods like papaya and oats."],
            when_to_see_doctor: "If there is severe abdominal pain or blood in your stool."
        },
        hi: {
            exercise_steps: "Tez tehalna aur pet ki exercise karein taki pet saaf ho.",
            precautions: "Maida aur fast food na khayein. Pani ki kami na hone dein.",
            first_aid: ["Subah uthte hi sabse pehle bada glass garam pani piyein.", "Papita aur oats jaise fiber wale khane khayein."],
            when_to_see_doctor: "Agar pet me bahut tez dard ho ya latrine me khoon aaye."
        }
    },
    "Migraine": {
        questions: [
            "Is the headache severe, throbbing, and located on one side? (Kya dard bahut tez, dhak-dhak wala aur ek taraf hai?)",
            "Are you experiencing nausea, vomiting, or extreme sensitivity to light/sound? (Kya ulti jaisa lag raha hai ya roshni/aawaz bardasht nahi ho rahi?)",
            "Do you see flashes of light or zigzag lines (aura)? (Kya aankhon ke aage roshni chamakti ya zigzag line dikhti hai?)"
        ],
        en: {
            exercise_steps: "Rest in a completely dark and silent room. Sleep is the best remedy.",
            precautions: "Avoid trigger foods like aged cheese, chocolate, or excessive caffeine.",
            first_aid: ["Apply a cold pack to your forehead or the back of your neck.", "Drink a small amount of caffeine early in the attack."],
            when_to_see_doctor: "If migraines are frequent, severe, or accompanied by weakness on one side of the body."
        },
        hi: {
            exercise_steps: "Pure andhere aur shant kamre me aaram karein. Sona sabse best ilaaj hai.",
            precautions: "Purana cheese, chocolate, ya bahut zyada coffee jaisi cheezon se bachein.",
            first_aid: ["Mathe ya gardan ke piche thandi patti rakhein.", "Dard shuru hote hi thodi si chai/coffee lein."],
            when_to_see_doctor: "Agar migraine baar-baar ho, bahut tez ho, ya body ke ek hisse me kamzori lage."
        }
    },
    "Chickenpox": {
        questions: [
            "Do you have an itchy rash that has turned into fluid-filled blisters? (Kya body par khujli wale daane hain jinme pani bhar gaya hai?)",
            "Did it start on your face, chest, or back before spreading? (Kya ye chehre, seene ya peeth se shuru hokar faile hain?)",
            "Do you have a fever, tiredness, and loss of appetite? (Kya bukhar, thakan aur bhookh kam ho gayi hai?)"
        ],
        en: {
            exercise_steps: "Strict isolation and bed rest. Avoid spreading it to others.",
            precautions: "Do NOT scratch the blisters, it will cause scars and infections.",
            first_aid: ["Take cool baths with neem leaves or baking soda to ease itching.", "Apply calamine lotion on the spots."],
            when_to_see_doctor: "If the rash spreads to the eyes, gets very red/warm, or you have breathing problems."
        },
        hi: {
            exercise_steps: "Dusro se alag rahein aur bed rest karein. Isey failne se rokein.",
            precautions: "Daano/chhalo ko BILKUL na khujlayein, isse nishan padenge aur infection hoga.",
            first_aid: ["Khujli kam karne ke liye neem ke patte wale thande pani se nahayein.", "Daano par calamine lotion lagayein."],
            when_to_see_doctor: "Agar daane aankho me ho jayein, bahut lal/garam ho jayein, ya saans lene me dikkat ho."
        }
    },
    "Ringworm": {
        questions: [
            "Do you have a ring-shaped, red, and scaly patch on your skin? (Kya skin par gol aakar ka, lal aur papdi wala daag hai?)",
            "Is the patch extremely itchy? (Kya us daag par bahut khujli hoti hai?)",
            "Has the circle been expanding slowly? (Kya wo gola dheere-dheere bada ho raha hai?)"
        ],
        en: {
            exercise_steps: "Keep the area dry. Avoid sweaty exercises if the rash chafes.",
            precautions: "Do not share towels, clothes, or combs. It is highly contagious.",
            first_aid: ["Keep the infected area clean and dry.", "Apply an over-the-counter anti-fungal cream."],
            when_to_see_doctor: "If it doesn't improve after 2 weeks of using anti-fungal cream."
        },
        hi: {
            exercise_steps: "Jagah ko sookha rakhein. Pasine wali exercise na karein jisse daag ragde.",
            precautions: "Tauliya, kapde ya kanghi share na karein. Ye aasaani se failta hai.",
            first_aid: ["Infection wali jagah ko saaf aur sookha rakhein.", "Medical store se anti-fungal cream (Daad ki dawa) le kar lagayein."],
            when_to_see_doctor: "Agar 2 hafte cream lagane ke baad bhi theek na ho."
        }
    },
    "Dandruff": {
        questions: [
            "Are there white, oily flakes falling from your scalp? (Kya sir se safed, teliy roosi gir rahi hai?)",
            "Is your scalp itchy and scaling? (Kya sir me khujli aur papdi ban rahi hai?)",
            "Does it worsen during dry, winter months? (Kya sardiyon me ye badh jata hai?)"
        ],
        en: {
            exercise_steps: "Regular exercise is fine. Wash sweat off your scalp promptly.",
            precautions: "Avoid using too many hair styling products or heavy oils.",
            first_aid: ["Massage scalp with aloe vera or a little lemon juice before washing.", "Use an anti-dandruff shampoo containing Zinc Pyrithione."],
            when_to_see_doctor: "If your scalp is red, swollen, or the dandruff doesn't clear up with medicated shampoos."
        },
        hi: {
            exercise_steps: "Exercise theek hai, par pasina aane ke baad sir zarur dho lein.",
            precautions: "Balo me zyada chemical wale products ya bahut zyada tel na lagayein.",
            first_aid: ["Dhone se pehle sir me aloe vera ya thoda nimbu ka ras lagayein.", "Anti-dandruff shampoo (ZPTO wala) use karein."],
            when_to_see_doctor: "Agar sir lal ho jaye, sujan ho, ya shampoo se bhi roosi na jaye."
        }
    },
    "Acne": {
        questions: [
            "Do you have red pimples, blackheads, or whiteheads on your face or back? (Kya chehre ya peeth par lal muhaase ya blackheads hain?)",
            "Are the pimples painful or filled with pus? (Kya muhaason me dard hai ya peep bhari hai?)",
            "Do you have a very oily face? (Kya aapka chehra bahut zyada oily hai?)"
        ],
        en: {
            exercise_steps: "Shower and wash your face immediately after a sweaty workout.",
            precautions: "Never pop or squeeze your pimples, it causes permanent scarring.",
            first_aid: ["Wash your face twice daily with a mild cleanser.", "Apply a spot treatment with Salicylic Acid or Benzoyl Peroxide."],
            when_to_see_doctor: "If acne is cystic (deep, painful lumps) or over-the-counter products don't work."
        },
        hi: {
            exercise_steps: "Pasine wale workout ke turant baad naha lein aur chehra dho lein.",
            precautions: "Muhaason ko BILKUL na fodein, isse umar bhar ke liye nishan pad jayenge.",
            first_aid: ["Din me do baar halke face wash se chehra dhoyein.", "Salicylic Acid ya Benzoyl Peroxide wali cream sirf daane par lagayein."],
            when_to_see_doctor: "Agar daane gath (cystic) wale aur bahut dardnaak hon, ya dawaiyo se theek na ho."
        }
    },
    "Anemia": {
        questions: [
            "Are you looking unusually pale? (Kya aapka chehra/body ajeeb sa peela ya safed lag raha hai?)",
            "Do you feel fatigued, weak, and short of breath after minimal effort? (Kya thoda sa kaam karne par thakan aur saans fulne lagti hai?)",
            "Are your hands and feet frequently cold? (Kya aapke hath-pair aksar thande rehte hain?)"
        ],
        en: {
            exercise_steps: "Do only light, low-intensity exercises until your iron levels improve.",
            precautions: "Avoid drinking tea/coffee with meals as it blocks iron absorption.",
            first_aid: ["Eat iron-rich foods like spinach, beetroot, and jaggery (gud).", "Take Vitamin C (lemon, orange) to help absorb iron."],
            when_to_see_doctor: "If you experience chest pain, rapid heartbeat, or extreme dizziness."
        },
        hi: {
            exercise_steps: "Jab tak aaram na mile, sirf halki exercise karein. Bhari workout se bachein.",
            precautions: "Khane ke sath chai/coffee na piyein, isse iron hazam nahi hota.",
            first_aid: ["Palak, chukandar aur gud jaise iron wale khane khayein.", "Iron hazam karne ke liye Vitamin C (nimbu, santra) lein."],
            when_to_see_doctor: "Agar seene me dard ho, dil ki dhadkan bahut tez ho, ya bahut chakkar aayein."
        }
    }
};