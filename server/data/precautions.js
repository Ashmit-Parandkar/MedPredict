import { MongoClient } from 'mongodb'


const precautions_list = {
    "Abscess": {
        "precaution_1": "Keep the affected area clean and dry.",
        "precaution_2": "Apply warm compresses to promote drainage and relieve pain.",
        "precaution_3": "Avoid squeezing or puncturing the abscess to prevent further infection.",
        "precaution_4": "Seek medical attention if the abscess is large, painful, or does not improve with home care."
    },
    "Acquired Capillary Haemangioma of Eyelid": {
        "precaution_1": "Protect the affected eye from injury.",
        "precaution_2": "Avoid rubbing or applying pressure to the haemangioma.",
        "precaution_3": "Keep the area clean to prevent infection.",
        "precaution_4": "Follow the treatment plan prescribed by an ophthalmologist."
    },
    "Acquired Immuno Deficiency Syndrome": {
        "precaution_1": "Practice safe sex to prevent transmission of HIV.",
        "precaution_2": "Avoid sharing needles or other injection equipment.",
        "precaution_3": "Get tested for HIV regularly, especially if engaging in high-risk behaviors.",
        "precaution_4": "Seek medical care promptly if exposed to HIV to discuss post-exposure prophylaxis."
    },
    "Acute encephalitis syndrome": {
        "precaution_1": "Avoid areas where mosquitoes breed, such as stagnant water.",
        "precaution_2": "Use insect repellent containing DEET when outdoors, especially during peak mosquito activity times.",
        "precaution_3": "Wear protective clothing, such as long sleeves and pants, to prevent mosquito bites.",
        "precaution_4": "Ensure proper screening of windows and doors to prevent mosquitoes from entering living spaces."
    },
    "Adult Inclusion Conjunctivitis": {
        "precaution_1": "Avoid touching or rubbing the eyes.",
        "precaution_2": "Wash hands frequently with soap and water, especially after touching the face or eyes.",
        "precaution_3": "Avoid sharing towels, pillows, or other personal items that may spread the infection.",
        "precaution_4": "Seek medical attention for diagnosis and treatment, which may include antibiotics or antiviral medications."
    },

    "Alcohol Abuse and Alcoholism": {
        "precaution_1": "Limit alcohol consumption to moderate levels or abstain completely.",
        "precaution_2": "Seek professional help if unable to control alcohol consumption.",
        "precaution_3": "Avoid situations or triggers that may lead to excessive drinking.",
        "precaution_4": "Participate in support groups or therapy to address underlying issues contributing to alcohol abuse."
    },
    "Alopecia (hair loss)": {
        "precaution_1": "Maintain a balanced diet rich in vitamins and minerals essential for hair health.",
        "precaution_2": "Avoid hairstyles that pull on the hair or cause traction alopecia.",
        "precaution_3": "Manage stress levels through relaxation techniques or therapy.",
        "precaution_4": "Consult a dermatologist for personalized treatment options, such as topical medications or hair transplants."
    },
    "Alzheimer": {
        "precaution_1": "Engage in mentally stimulating activities to promote brain health.",
        "precaution_2": "Follow a balanced diet rich in fruits, vegetables, and omega-3 fatty acids.",
        "precaution_3": "Stay physically active to improve blood flow to the brain.",
        "precaution_4": "Seek medical advice for early detection and management of symptoms."
    },
    "Amaurosis Fugax": {
        "precaution_1": "Seek immediate medical attention if experiencing sudden vision loss or changes.",
        "precaution_2": "Control underlying conditions such as high blood pressure and diabetes.",
        "precaution_3": "Quit smoking to reduce the risk of vascular diseases affecting vision.",
        "precaution_4": "Follow a healthy lifestyle with regular exercise and a balanced diet."
    },
    "Amblyopia": {
        "precaution_1": "Diagnose and treat underlying conditions such as strabismus or refractive errors early.",
        "precaution_2": "Encourage regular eye examinations, especially in children, to detect amblyopia early.",
        "precaution_3": "Implement patching or other vision therapy as recommended by an eye care professional.",
        "precaution_4": "Educate about the importance of compliance with treatment to improve visual outcomes."
    },
    "Amoebiasis": {
        "precaution_1": "Practice good hygiene, including regular handwashing with soap and water.",
        "precaution_2": "Avoid drinking untreated water or consuming raw or undercooked food.",
        "precaution_3": "Maintain clean and sanitary living conditions, especially in areas with poor sanitation.",
        "precaution_4": "Seek medical attention promptly if experiencing symptoms such as diarrhea or abdominal pain."
    },
    "Anaemia": {
        "precaution_1": "Eat a diet rich in iron, vitamin B12, and folate.",
        "precaution_2": "Take iron supplements as prescribed by a healthcare professional.",
        "precaution_3": "Avoid excessive consumption of tea or coffee, which can inhibit iron absorption.",
        "precaution_4": "Seek medical advice for proper diagnosis and management of underlying causes of anaemia."
    },
    "Aniseikonia": {
        "precaution_1": "Correct refractive errors with appropriate eyeglasses or contact lenses.",
        "precaution_2": "Follow up with an eye care professional regularly for vision assessments.",
        "precaution_3": "Discuss potential treatment options with an optometrist or ophthalmologist.",
        "precaution_4": "Avoid activities that worsen symptoms, such as prolonged reading or screen time without breaks."
    },
    "Anisometropia": {
        "precaution_1": "Correct refractive errors with appropriate eyeglasses or contact lenses.",
        "precaution_2": "Follow up with an eye care professional regularly for vision assessments.",
        "precaution_3": "Consider vision therapy or other interventions as recommended by an optometrist or ophthalmologist.",
        "precaution_4": "Be aware of symptoms such as eyestrain or headaches and seek professional advice."
    },
    "Antepartum hemorrhage (Bleeding in late pregnancy)": {
        "precaution_1": "Attend regular prenatal check-ups to monitor for any signs of complications.",
        "precaution_2": "Avoid strenuous physical activities and heavy lifting during pregnancy.",
        "precaution_3": "Notify healthcare provider immediately if experiencing vaginal bleeding or abdominal pain.",
        "precaution_4": "Follow healthcare provider's instructions for bed rest or other interventions if necessary."
    },
    "Anthrax": {
        "precaution_1": "Avoid contact with infected animals or animal products.",
        "precaution_2": "Handle potentially contaminated materials, such as animal hides or wool, with caution.",
        "precaution_3": "Practice good hygiene, including thorough handwashing with soap and water.",
        "precaution_4": "Follow public health recommendations during anthrax outbreaks, such as vaccination or prophylactic antibiotics."
    },
    "Anxiety": {
        "precaution_1": "Practice stress management techniques, such as deep breathing or meditation.",
        "precaution_2": "Engage in regular physical activity to promote mental well-being.",
        "precaution_3": "Limit caffeine and alcohol intake, as they can exacerbate anxiety symptoms.",
        "precaution_4": "Seek professional help if anxiety symptoms interfere with daily life or relationships."
    },
    "Appendicitis": {
        "precaution_1": "Maintain a high-fiber diet to promote regular bowel movements and prevent constipation.",
        "precaution_2": "Seek medical attention promptly if experiencing symptoms such as abdominal pain, especially if it worsens over time.",
        "precaution_3": "Avoid delay in diagnosis and treatment, as appendicitis can lead to serious complications if left untreated.",
        "precaution_4": "Follow healthcare provider's instructions for post-appendectomy care to prevent infection or other complications."
    },
    "Arthritis": {
        "precaution_1": "Maintain a healthy weight to reduce stress on joints.",
        "precaution_2": "Engage in regular exercise, such as swimming or walking, to improve joint flexibility and strength.",
        "precaution_3": "Use assistive devices or adaptive equipment to ease daily activities.",
        "precaution_4": "Follow prescribed treatment plan, including medications and physical therapy, to manage symptoms and prevent progression."
    },
    "Asbestos-related diseases": {
        "precaution_1": "Avoid exposure to asbestos by following safety guidelines in workplaces or environments where asbestos may be present.",
        "precaution_2": "Use personal protective equipment, such as masks or respirators, when working with or near asbestos.",
        "precaution_3": "Regularly monitor health and report any respiratory symptoms to healthcare provider.",
        "precaution_4": "Seek medical advice if exposed to asbestos to discuss monitoring and early detection of asbestos-related diseases."
    },
    "Aseptic meningitis": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water.",
        "precaution_2": "Avoid close contact with individuals who have viral infections, as some cases of aseptic meningitis are caused by viruses.",
        "precaution_3": "Ensure vaccination against vaccine-preventable causes of meningitis, such as measles, mumps, and influenza.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as headache, fever, or stiff neck, especially if there is a concern for meningitis."
    },
    "Asthma": {
        "precaution_1": "Identify and avoid triggers that exacerbate asthma symptoms, such as allergens or pollutants.",
        "precaution_2": "Take prescribed medications regularly to control asthma symptoms and prevent attacks.",
        "precaution_3": "Develop an asthma action plan in consultation with healthcare provider to manage symptoms and respond to emergencies.",
        "precaution_4": "Monitor lung function regularly with peak flow meters or spirometry."
    },
    "Astigmatism": {
        "precaution_1": "Wear prescribed corrective lenses, such as glasses or contact lenses, to improve vision.",
        "precaution_2": "Attend regular eye examinations to monitor changes in vision and prescription.",
        "precaution_3": "Consider refractive surgery, such as LASIK, if appropriate and recommended by an eye care professional.",
        "precaution_4": "Avoid eye strain by taking regular breaks during activities that require prolonged visual focus."
    },
    "Atrophy": {
        "precaution_1": "Engage in regular physical activity to maintain muscle strength and prevent disuse atrophy.",
        "precaution_2": "Follow a balanced diet with adequate protein intake to support muscle health.",
        "precaution_3": "Participate in rehabilitation or physical therapy programs if recovering from injury or illness.",
        "precaution_4": "Avoid prolonged immobility or bed rest, as it can lead to muscle wasting."
    },
    "Autism": {
        "precaution_1": "Seek early intervention and diagnosis for children showing signs of autism spectrum disorder.",
        "precaution_2": "Participate in behavioral therapy or interventions tailored to individual needs and strengths.",
        "precaution_3": "Create a supportive and structured environment at home and school.",
        "precaution_4": "Educate family members, caregivers, and educators about autism and effective strategies for communication and behavior management."
    },
    "Bad Breath (Halitosis)": {
        "precaution_1": "Maintain good oral hygiene by brushing teeth and tongue regularly.",
        "precaution_2": "Floss daily to remove food particles and plaque from between teeth.",
        "precaution_3": "Stay hydrated and avoid dry mouth by drinking plenty of water.",
        "precaution_4": "Avoid foods and drinks that can contribute to bad breath, such as garlic, onions, and coffee."
    },
    "Bell's Palsy": {
        "precaution_1": "Protect the affected eye with lubricating eye drops or patches to prevent dryness and injury.",
        "precaution_2": "Practice facial exercises or massage to maintain muscle tone and prevent contractures.",
        "precaution_3": "Use moist heat therapy to alleviate pain and promote relaxation of facial muscles.",
        "precaution_4": "Follow prescribed medications, such as corticosteroids, to reduce inflammation and speed recovery."
    },
    "Beriberi": {
        "precaution_1": "Eat a balanced diet with sufficient thiamine (vitamin B1) sources, such as whole grains, nuts, and lean meats.",
        "precaution_2": "Avoid excessive alcohol consumption, which can impair thiamine absorption and lead to deficiency.",
        "precaution_3": "Consider thiamine supplements if at risk of deficiency due to malnutrition or certain medical conditions.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as weakness, fatigue, or neurological abnormalities."
    },
    "Black Death": {
        "precaution_1": "Practice good hygiene, including regular handwashing with soap and water.",
        "precaution_2": "Avoid close contact with individuals showing symptoms of plague, such as coughing or fever.",
        "precaution_3": "Use insect repellent and protective clothing to prevent flea bites when in endemic areas.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms such as fever, swollen lymph nodes, or difficulty breathing."
    },
    "Bleeding Gums": {
        "precaution_1": "Maintain good oral hygiene by brushing teeth and gums twice daily.",
        "precaution_2": "Floss daily to remove plaque and food particles from between teeth and along the gumline.",
        "precaution_3": "Use a soft-bristled toothbrush and gentle brushing technique to avoid irritating gums.",
        "precaution_4": "Schedule regular dental check-ups and cleanings to monitor gum health and address any issues early."
    },
    "Blindness": {
        "precaution_1": "Attend regular eye examinations to monitor vision health and detect any early signs of eye diseases.",
        "precaution_2": "Protect eyes from injury by wearing appropriate safety goggles or eyewear when engaging in activities with potential hazards.",
        "precaution_3": "Manage chronic health conditions such as diabetes or hypertension to prevent complications affecting vision.",
        "precaution_4": "Seek immediate medical attention for any sudden changes in vision or eye-related symptoms."
    },
    "Botulism": {
        "precaution_1": "Avoid consuming improperly preserved or canned foods, especially low-acid foods.",
        "precaution_2": "Follow proper food handling and storage practices to prevent bacterial contamination.",
        "precaution_3": "Do not feed honey to infants under one year of age, as it may contain spores that can cause infant botulism.",
        "precaution_4": "Seek medical attention immediately if experiencing symptoms such as muscle weakness, difficulty swallowing, or blurred vision."
    },
    "Brain Tumour": {
        "precaution_1": "Follow prescribed treatment plan, which may include surgery, radiation therapy, or chemotherapy.",
        "precaution_2": "Attend regular medical appointments for monitoring and follow-up care.",
        "precaution_3": "Manage symptoms such as headaches or seizures with medications as directed by healthcare provider.",
        "precaution_4": "Seek support from healthcare professionals, support groups, or counselors to cope with emotional and psychological challenges."
    },
    "Breast Cancer / Carcinoma": {
        "precaution_1": "Perform regular breast self-exams to detect any changes or abnormalities.",
        "precaution_2": "Schedule regular clinical breast exams and mammograms as recommended by healthcare provider.",
        "precaution_3": "Maintain a healthy lifestyle with regular exercise and a balanced diet to reduce risk factors.",
        "precaution_4": "Be aware of family history and genetic factors that may increase risk, and discuss with healthcare provider for personalized risk assessment."
    },
    "Bronchitis": {
        "precaution_1": "Quit smoking and avoid exposure to secondhand smoke, as it can worsen bronchitis symptoms.",
        "precaution_2": "Stay hydrated by drinking plenty of fluids to thin mucus and ease coughing.",
        "precaution_3": "Use a humidifier to add moisture to the air and soothe irritated airways.",
        "precaution_4": "Follow prescribed medications, such as bronchodilators or cough suppressants, as directed by healthcare provider."
    },
    "Brucellosis": {
        "precaution_1": "Avoid consuming unpasteurized dairy products, especially from endemic areas.",
        "precaution_2": "Practice good hygiene, including thorough handwashing after handling animals or animal products.",
        "precaution_3": "Use protective clothing and equipment when working with livestock or in environments where brucellosis may be present.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as fever, sweats, fatigue, or joint pain, especially after potential exposure to Brucella."
    },
    "Bubonic plague": {
        "precaution_1": "Avoid close contact with individuals showing symptoms of plague, such as coughing or fever.",
        "precaution_2": "Use insect repellent and protective clothing to prevent flea bites when in endemic areas.",
        "precaution_3": "Do not handle sick or dead animals, especially rodents, without proper protection.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms such as fever, swollen lymph nodes, or difficulty breathing."
    },
    "Bunion": {
        "precaution_1": "Wear properly fitting shoes with adequate toe room and support.",
        "precaution_2": "Avoid high-heeled shoes or shoes with narrow toe boxes that can exacerbate bunion pain.",
        "precaution_3": "Use orthotic devices or shoe inserts to support the foot and redistribute pressure away from the bunion.",
        "precaution_4": "Consider conservative treatments such as padding, taping, or physical therapy to relieve symptoms."
    },
    "Burns": {
        "precaution_1": "Take precautions when handling hot liquids or objects to prevent accidental burns.",
        "precaution_2": "Use caution when cooking with hot oil or grease to avoid splashes or spills.",
        "precaution_3": "Keep hot surfaces, such as stovetops and irons, out of reach of children.",
        "precaution_4": "Follow proper first aid procedures for treating burns, including cooling the burn with cool running water and seeking medical attention for severe burns."
    },
    "Calculi": {
        "precaution_1": "Stay hydrated by drinking plenty of fluids to help prevent the formation of stones.",
        "precaution_2": "Limit consumption of foods high in oxalates, such as spinach, nuts, and chocolate, if prone to calcium oxalate stones.",
        "precaution_3": "Maintain a balanced diet with adequate calcium intake to prevent oxalate absorption.",
        "precaution_4": "Follow medical advice for managing underlying conditions that may contribute to stone formation, such as urinary tract infections or metabolic disorders."
    },
    "Campylobacter infection": {
        "precaution_1": "Cook poultry, meat, and eggs thoroughly to kill Campylobacter bacteria.",
        "precaution_2": "Prevent cross-contamination by keeping raw foods separate from cooked foods.",
        "precaution_3": "Wash hands, cutting boards, and utensils thoroughly after handling raw meat or poultry.",
        "precaution_4": "Avoid consuming unpasteurized dairy products, as they may contain Campylobacter bacteria."
    },
    "Cancer": {
        "precaution_1": "Maintain a healthy lifestyle with a balanced diet, regular exercise, and limited alcohol consumption.",
        "precaution_2": "Avoid tobacco products and exposure to secondhand smoke, which are major risk factors for cancer.",
        "precaution_3": "Participate in cancer screening programs, such as mammograms or colonoscopies, as recommended by healthcare provider.",
        "precaution_4": "Seek medical attention promptly for any unusual symptoms or changes in health that may indicate cancer."
    },
    "Candidiasis": {
        "precaution_1": "Practice good hygiene, especially in warm and moist areas of the body where yeast infections commonly occur.",
        "precaution_2": "Avoid wearing tight-fitting clothing made of synthetic materials, which can trap moisture and promote yeast growth.",
        "precaution_3": "Limit the use of antibiotics, as they can disrupt the balance of bacteria and yeast in the body.",
        "precaution_4": "Seek medical advice for proper diagnosis and treatment, especially if experiencing recurrent or severe yeast infections."
    },
    "Carbon monoxide poisoning": {
        "precaution_1": "Install carbon monoxide detectors in living areas and sleeping quarters to alert occupants of high levels of carbon monoxide.",
        "precaution_2": "Ensure proper ventilation of gas appliances, such as furnaces, stoves, and water heaters, to prevent buildup of carbon monoxide.",
        "precaution_3": "Never use charcoal or gas grills indoors or in enclosed spaces, as they produce carbon monoxide.",
        "precaution_4": "Seek fresh air immediately if experiencing symptoms such as headache, dizziness, nausea, or confusion, and seek medical attention if symptoms persist or worsen."
    },
    "Carpal Tunnel Syndrome": {
        "precaution_1": "Take frequent breaks during repetitive tasks involving the hands and wrists to rest and stretch.",
        "precaution_2": "Maintain neutral wrist positions when typing or using hand-held devices to reduce strain on the median nerve.",
        "precaution_3": "Use ergonomic equipment, such as wrist splints or keyboard trays, to support proper hand and wrist alignment.",
        "precaution_4": "Follow prescribed treatment plan, which may include rest, splinting, physical therapy, or corticosteroid injections."
    },
    "Cavities": {
        "precaution_1": "Brush teeth at least twice daily with fluoride toothpaste to remove plaque and prevent decay.",
        "precaution_2": "Floss daily to clean between teeth and remove plaque in areas brushing cannot reach.",
        "precaution_3": "Limit consumption of sugary and acidic foods and drinks, which can contribute to tooth decay.",
        "precaution_4": "Visit dentist regularly for check-ups and professional cleanings to detect and treat cavities early."
    },
    "Celiacs disease": {
        "precaution_1": "Adhere strictly to a gluten-free diet, avoiding all sources of gluten, including wheat, barley, and rye.",
        "precaution_2": "Read food labels carefully and be aware of hidden sources of gluten in processed foods and medications.",
        "precaution_3": "Use separate cooking utensils, cutting boards, and kitchen appliances to prevent cross-contamination with gluten-containing foods.",
        "precaution_4": "Consult a registered dietitian or healthcare provider for guidance on maintaining a balanced diet while avoiding gluten."
    },
    "Cerebral palsy": {
        "precaution_1": "Follow prescribed treatment plan, which may include physical therapy, occupational therapy, and medications to manage symptoms and improve quality of life.",
        "precaution_2": "Create a supportive and accessible environment at home and school to facilitate independence and mobility.",
        "precaution_3": "Stay up-to-date with medical appointments and evaluations to monitor for any changes in condition or new interventions.",
        "precaution_4": "Seek emotional and social support from healthcare professionals, support groups, and community resources."
    },
    "Chagas disease": {
        "precaution_1": "Prevent exposure to triatomine bugs, which can transmit the parasite that causes Chagas disease, by using insect repellent and bed nets.",
        "precaution_2": "Avoid sleeping in thatched or adobe houses where triatomine bugs may live.",
        "precaution_3": "Screen blood donors and organ donors for Chagas disease to prevent transmission through blood transfusions or organ transplants.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as fever, swelling at the site of the bug bite, or swollen lymph nodes."
    },
    "Chalazion": {
        "precaution_1": "Apply warm compresses to the affected eyelid several times a day to promote drainage and relieve symptoms.",
        "precaution_2": "Avoid rubbing or squeezing the chalazion, as it can worsen inflammation and delay healing.",
        "precaution_3": "Maintain good eyelid hygiene by gently cleaning the eyelid with mild soap and water.",
        "precaution_4": "Seek medical attention if the chalazion does not improve with home care or if it causes vision problems or severe pain."
    },
    "Chickenpox": {
        "precaution_1": "Stay home and avoid close contact with others to prevent spreading the virus.",
        "precaution_2": "Take over-the-counter medications, such as acetaminophen, to reduce fever and relieve itching.",
        "precaution_3": "Keep skin clean and dry to prevent secondary bacterial infections from scratching.",
        "precaution_4": "Consult healthcare provider about vaccination options for preventing chickenpox, especially for individuals at higher risk of complications."
    },
    "Chikungunya Fever": {
        "precaution_1": "Prevent mosquito bites by using insect repellent, wearing long sleeves and pants, and using mosquito nets.",
        "precaution_2": "Eliminate standing water around the home to reduce mosquito breeding sites.",
        "precaution_3": "Seek medical attention if experiencing symptoms such as fever, joint pain, or rash, especially after travel to areas with chikungunya transmission.",
        "precaution_4": "Rest and stay hydrated to relieve symptoms and prevent complications."
    },
    "Childhood Exotropia": {
        "precaution_1": "Consult an eye care professional for diagnosis and treatment options.",
        "precaution_2": "Encourage regular eye examinations, especially in children, to monitor for vision changes.",
        "precaution_3": "Discuss potential interventions, such as glasses, patches, or surgery, with an ophthalmologist.",
        "precaution_4": "Educate about the importance of compliance with treatment to achieve optimal visual outcomes."
    },
    "Chlamydia": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of chlamydia and other sexually transmitted infections.",
        "precaution_2": "Get tested for chlamydia and other STIs regularly, especially if sexually active with multiple partners.",
        "precaution_3": "Notify sexual partners if diagnosed with chlamydia to prevent further spread of the infection.",
        "precaution_4": "Complete prescribed course of antibiotics as directed by healthcare provider."
    },
    "Cholera": {
        "precaution_1": "Practice good hygiene, including regular handwashing with soap and water.",
        "precaution_2": "Drink only safe water from reliable sources, or boil water before drinking if unsure of its safety.",
        "precaution_3": "Avoid eating raw or undercooked seafood, especially in areas where cholera is endemic.",
        "precaution_4": "Seek medical attention promptly if experiencing symptoms such as severe diarrhea, vomiting, or dehydration."
    },
    "Chorea": {
        "precaution_1": "Follow prescribed treatment plan, which may include medications to manage symptoms.",
        "precaution_2": "Ensure a safe environment to prevent injury during involuntary movements.",
        "precaution_3": "Participate in physical therapy or occupational therapy to improve motor function and coordination.",
        "precaution_4": "Seek support from healthcare professionals, support groups, or counselors to cope with emotional and psychological challenges."
    },
    "Chronic fatigue syndrome": {
        "precaution_1": "Balance activity and rest to avoid overexertion and exacerbation of symptoms.",
        "precaution_2": "Maintain a healthy lifestyle with regular exercise, balanced diet, and adequate sleep.",
        "precaution_3": "Manage stress through relaxation techniques, such as meditation or deep breathing exercises.",
        "precaution_4": "Work with healthcare provider to develop a personalized treatment plan, which may include medications, therapy, and lifestyle modifications."
    },
    "Chronic obstructive pulmonary disease (COPD)": {
        "precaution_1": "Quit smoking and avoid exposure to secondhand smoke, as smoking is the leading cause of COPD.",
        "precaution_2": "Avoid exposure to air pollutants and respiratory irritants, such as dust and chemicals.",
        "precaution_3": "Take prescribed medications regularly, including bronchodilators and corticosteroids, to manage symptoms and prevent exacerbations.",
        "precaution_4": "Participate in pulmonary rehabilitation programs to improve lung function, exercise tolerance, and quality of life."
    },
    "Cleft Lip and Cleft Palate": {
        "precaution_1": "Attend prenatal care appointments to monitor fetal development and discuss treatment options.",
        "precaution_2": "Consult with a multidisciplinary team of healthcare professionals, including surgeons, pediatricians, and speech therapists.",
        "precaution_3": "Consider surgical correction of cleft lip and palate as early as possible to improve feeding, speech, and facial appearance.",
        "precaution_4": "Provide emotional support and counseling for families coping with the challenges of cleft lip and palate."
    },
    "Colitis": {
        "precaution_1": "Follow prescribed treatment plan, which may include medications, dietary changes, and lifestyle modifications.",
        "precaution_2": "Maintain a well-balanced diet with plenty of fluids, fiber, and probiotics to support gastrointestinal health.",
        "precaution_3": "Avoid trigger foods that worsen symptoms, such as spicy or high-fat foods.",
        "precaution_4": "Monitor symptoms closely and seek medical attention for any changes or worsening of colitis."
    },
    "Colorectal Cancer": {
        "precaution_1": "Participate in cancer screening programs, such as colonoscopies or stool tests, as recommended by healthcare provider.",
        "precaution_2": "Maintain a healthy lifestyle with regular exercise, balanced diet, and limited alcohol consumption.",
        "precaution_3": "Quit smoking and avoid exposure to secondhand smoke, as smoking is a risk factor for colorectal cancer.",
        "precaution_4": "Be aware of family history and genetic factors that may increase risk, and discuss with healthcare provider for personalized risk assessment."
    },
    "Common cold": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water.",
        "precaution_2": "Cover mouth and nose with a tissue or sleeve when coughing or sneezing to prevent spreading the virus.",
        "precaution_3": "Avoid close contact with individuals who have cold symptoms.",
        "precaution_4": "Stay home from work or school if experiencing cold symptoms to prevent spreading the virus to others."
    },
    "Condyloma": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of human papillomavirus (HPV) infection.",
        "precaution_2": "Get vaccinated against HPV to prevent infection with high-risk strains associated with condyloma and cervical cancer.",
        "precaution_3": "Undergo regular screenings, such as Pap tests or HPV tests, as recommended by healthcare provider.",
        "precaution_4": "Seek medical attention for evaluation and treatment of condyloma, including topical medications or procedures to remove warts."
    },
    "Congenital anomalies (birth defects)": {
        "precaution_1": "Attend prenatal care appointments for early detection and management of congenital anomalies.",
        "precaution_2": "Discuss with healthcare provider about screening tests, such as ultrasound or genetic testing, to assess fetal development.",
        "precaution_3": "Avoid exposure to teratogens, such as certain medications, alcohol, tobacco, and illicit drugs, during pregnancy.",
        "precaution_4": "Seek support from healthcare professionals and support groups for families coping with congenital anomalies."
    },
    "Congestive heart disease": {
        "precaution_1": "Follow prescribed treatment plan, including medications, lifestyle modifications, and monitoring of fluid intake.",
        "precaution_2": "Adhere to dietary restrictions, such as limiting salt intake, to manage fluid retention and reduce strain on the heart.",
        "precaution_3": "Monitor symptoms closely and report any changes or worsening to healthcare provider.",
        "precaution_4": "Participate in cardiac rehabilitation programs to improve heart health, exercise tolerance, and quality of life."
    },
    "Corneal Abrasion": {
        "precaution_1": "Avoid rubbing the affected eye, as it can worsen the injury and delay healing.",
        "precaution_2": "Protect the eye from further injury by wearing a protective shield or eyeglasses.",
        "precaution_3": "Use prescribed eye drops or ointments to keep the eye lubricated and prevent infection.",
        "precaution_4": "Seek medical attention for evaluation and treatment of corneal abrasion, especially if experiencing severe pain or vision changes."
    },
    "Coronary Heart Disease": {
        "precaution_1": "Follow a heart-healthy diet low in saturated fats, cholesterol, and sodium.",
        "precaution_2": "Engage in regular physical activity, such as walking or swimming, to improve cardiovascular health.",
        "precaution_3": "Quit smoking and avoid exposure to secondhand smoke, as smoking is a major risk factor for coronary heart disease.",
        "precaution_4": "Take prescribed medications, such as statins or blood thinners, as directed by healthcare provider to manage risk factors and prevent complications."
    },
    "Coronavirus disease 2019 (COVID-19)": {
        "precaution_1": "Practice good hand hygiene by washing hands frequently with soap and water for at least 20 seconds.",
        "precaution_2": "Wear a mask in public settings, especially when social distancing measures cannot be maintained.",
        "precaution_3": "Avoid close contact with individuals who are sick or showing symptoms of COVID-19.",
        "precaution_4": "Stay informed about COVID-19 guidelines and recommendations from local health authorities."
    },
    "Cough": {
        "precaution_1": "Cover mouth and nose with a tissue or sleeve when coughing or sneezing to prevent spreading respiratory droplets.",
        "precaution_2": "Practice good hand hygiene by washing hands frequently with soap and water.",
        "precaution_3": "Avoid close contact with individuals who have cough symptoms, especially if also experiencing fever or respiratory symptoms.",
        "precaution_4": "Stay home from work or school if experiencing cough symptoms, especially during cold and flu season."
    },
    "Crimean Congo haemorrhagic fever (CCHF)": {
        "precaution_1": "Avoid contact with blood or body fluids of infected animals or humans.",
        "precaution_2": "Wear protective clothing, such as gloves and masks, when caring for sick individuals or handling animal carcasses.",
        "precaution_3": "Use insect repellent and protective clothing to prevent tick bites when in endemic areas.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as fever, muscle aches, or bleeding, especially after potential exposure to CCHF."
    },
    "Dehydration": {
        "precaution_1": "Stay hydrated by drinking plenty of fluids, especially water, throughout the day.",
        "precaution_2": "Avoid excessive consumption of caffeine and alcohol, which can contribute to dehydration.",
        "precaution_3": "Monitor urine color and volume as indicators of hydration status; aim for pale yellow urine and frequent urination.",
        "precaution_4": "Seek medical attention if experiencing symptoms of severe dehydration, such as dizziness, rapid heartbeat, or confusion."
    },
    "Dementia": {
        "precaution_1": "Create a safe and supportive environment at home for individuals with dementia, including removing safety hazards and providing supervision.",
        "precaution_2": "Establish daily routines and structured activities to promote engagement and cognitive stimulation.",
        "precaution_3": "Encourage regular physical exercise and social interaction to maintain overall health and well-being.",
        "precaution_4": "Seek support from healthcare professionals, support groups, and community resources for caregivers coping with the challenges of dementia."
    },
    "Dengue": {
        "precaution_1": "Prevent mosquito bites by using insect repellent, wearing long sleeves and pants, and using mosquito nets.",
        "precaution_2": "Eliminate standing water around the home to reduce mosquito breeding sites.",
        "precaution_3": "Seek medical attention if experiencing symptoms such as high fever, severe headache, or joint and muscle pain.",
        "precaution_4": "Rest and stay hydrated to relieve symptoms and prevent complications."
    },
    "Diabetes Mellitus": {
        "precaution_1": "Monitor blood sugar levels regularly and adhere to prescribed treatment plan, including medications and insulin therapy.",
        "precaution_2": "Follow a balanced diet with controlled carbohydrate intake to manage blood sugar levels.",
        "precaution_3": "Engage in regular physical activity to improve insulin sensitivity and overall health.",
        "precaution_4": "Attend regular medical check-ups and screenings to monitor for diabetes-related complications."
    },
    "Diabetic Retinopathy": {
        "precaution_1": "Control blood sugar levels through diet, exercise, and medication as prescribed by healthcare provider.",
        "precaution_2": "Attend regular eye examinations to monitor for signs of diabetic retinopathy and other eye complications.",
        "precaution_3": "Manage other health conditions that may exacerbate diabetic retinopathy, such as hypertension and high cholesterol.",
        "precaution_4": "Seek prompt medical attention if experiencing changes in vision or other symptoms of diabetic retinopathy."
    },
    "Diarrhea": {
        "precaution_1": "Stay hydrated by drinking plenty of fluids, such as water, broth, or oral rehydration solutions, to replace lost fluids and electrolytes.",
        "precaution_2": "Avoid dairy products, caffeine, and fatty or spicy foods, which can exacerbate diarrhea.",
        "precaution_3": "Practice good hygiene, including frequent handwashing with soap and water, to prevent spreading diarrhea-causing pathogens.",
        "precaution_4": "Seek medical attention if diarrhea is severe, persistent, or accompanied by other concerning symptoms, such as fever or blood in stool."
    },
    "Diphtheria": {
        "precaution_1": "Get vaccinated against diphtheria as part of routine childhood immunization.",
        "precaution_2": "Ensure booster vaccinations as recommended by healthcare provider to maintain immunity against diphtheria.",
        "precaution_3": "Practice good hygiene, including regular handwashing with soap and water.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as sore throat, difficulty breathing, or a gray or black coating in the throat or nose."
    },
    "Down's Syndrome": {
        "precaution_1": "Attend regular medical check-ups and screenings to monitor for associated health conditions, such as heart defects, thyroid problems, and vision or hearing impairment.",
        "precaution_2": "Provide early intervention and support services, including physical therapy, speech therapy, and special education, to promote development and learning.",
        "precaution_3": "Create a supportive and inclusive environment at home, school, and in the community to facilitate social integration and participation.",
        "precaution_4": "Seek emotional and social support from healthcare professionals, support groups, and community resources for families coping with the challenges of Down's syndrome."
    },
    "Dracunculiasis (guinea-worm disease)": {
        "precaution_1": "Prevent contamination of water sources with human or animal feces, which can harbor Dracunculus larvae.",
        "precaution_2": "Filter drinking water through a fine mesh cloth or pipe filter to remove larvae.",
        "precaution_3": "Boil water before drinking if filtration is not possible or if water quality is questionable.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as blistering skin lesions, fever, or swelling, especially after potential exposure to contaminated water."
    },
    "Dysentery": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water, to prevent spreading dysentery-causing pathogens.",
        "precaution_2": "Ensure safe water sources and proper sanitation to prevent contamination of food and water with fecal matter.",
        "precaution_3": "Avoid raw or undercooked foods, especially in areas where dysentery is endemic.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as bloody diarrhea, abdominal pain, or fever, especially if traveling in regions with poor sanitation."
    },
    "Ear infection": {
        "precaution_1": "Practice good hand hygiene to prevent the spread of germs that can cause ear infections.",
        "precaution_2": "Avoid smoking and exposure to secondhand smoke, as it can increase the risk of ear infections.",
        "precaution_3": "Keep ears dry and clean, and avoid inserting objects such as cotton swabs or fingers into the ear canal.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as ear pain, fluid drainage, or hearing loss, especially in children."
    },
    "Early pregnancy loss": {
        "precaution_1": "Attend prenatal care appointments for monitoring and support.",
        "precaution_2": "Avoid smoking, alcohol, and illicit drugs during pregnancy, as they can increase the risk of pregnancy loss.",
        "precaution_3": "Seek emotional support from healthcare professionals, support groups, and loved ones to cope with the loss.",
        "precaution_4": "Discuss with healthcare provider about potential causes of early pregnancy loss and future pregnancy planning."
    },
    "Ebola": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water.",
        "precaution_2": "Avoid direct contact with blood or body fluids of infected individuals or deceased persons.",
        "precaution_3": "Use personal protective equipment, such as gloves, masks, and gowns, when caring for sick individuals or handling contaminated materials.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as fever, severe headache, muscle pain, or unexplained bleeding."
    },
    "Eclampsia": {
        "precaution_1": "Attend regular prenatal care appointments for monitoring of blood pressure and other indicators of preeclampsia and eclampsia.",
        "precaution_2": "Follow prescribed treatment plan, which may include medications to lower blood pressure and prevent seizures.",
        "precaution_3": "Monitor symptoms closely and seek medical attention for any changes or worsening of preeclampsia symptoms, such as severe headache, visual disturbances, or swelling.",
        "precaution_4": "Deliver the baby if medically necessary to prevent complications for both mother and baby."
    },
    "Ectopic pregnancy": {
        "precaution_1": "Seek prompt medical attention if experiencing symptoms of ectopic pregnancy, such as abdominal pain, vaginal bleeding, or shoulder pain.",
        "precaution_2": "Undergo diagnostic tests, such as ultrasound or blood tests, to confirm the diagnosis of ectopic pregnancy.",
        "precaution_3": "Follow treatment recommendations provided by healthcare provider, which may include medication or surgery to remove the ectopic pregnancy.",
        "precaution_4": "Attend follow-up appointments for monitoring and support, especially if fertility concerns arise after treatment."
    },
    "Eczema": {
        "precaution_1": "Keep skin well moisturized with emollients or moisturizing creams to prevent dryness and itching.",
        "precaution_2": "Avoid triggers that worsen eczema symptoms, such as harsh soaps, hot water, and certain fabrics.",
        "precaution_3": "Use mild, fragrance-free skincare products and laundry detergents to reduce irritation.",
        "precaution_4": "Seek medical advice for proper diagnosis and treatment, including prescription medications or topical steroids, if eczema symptoms are severe or persistent."
    },
    "Endometriosis": {
        "precaution_1": "Seek medical advice for diagnosis and treatment of endometriosis, especially if experiencing symptoms such as pelvic pain, painful periods, or infertility.",
        "precaution_2": "Consider hormonal therapy or other medications prescribed by healthcare provider to manage symptoms and slow the progression of endometriosis.",
        "precaution_3": "Explore lifestyle modifications, such as regular exercise, stress management, and dietary changes, to alleviate symptoms.",
        "precaution_4": "Discuss surgical options, such as laparoscopic excision or hysterectomy, with healthcare provider for severe cases or fertility concerns."
    },
    "Epilepsy": {
        "precaution_1": "Take prescribed antiepileptic medications regularly and as directed by healthcare provider to control seizures.",
        "precaution_2": "Maintain a consistent sleep schedule and prioritize adequate rest to reduce the risk of seizure triggers.",
        "precaution_3": "Avoid alcohol and recreational drugs, as they can interfere with medication effectiveness and increase seizure risk.",
        "precaution_4": "Wear medical alert jewelry or carry a seizure action plan to inform others about epilepsy and appropriate responses during seizures."
    },
    "Fibroids": {
        "precaution_1": "Monitor symptoms closely and seek medical advice for proper diagnosis and treatment of fibroids, especially if experiencing heavy menstrual bleeding, pelvic pain, or pressure.",
        "precaution_2": "Explore treatment options with healthcare provider, including medications, minimally invasive procedures, or surgery, based on individual needs and preferences.",
        "precaution_3": "Consider lifestyle modifications, such as regular exercise and a balanced diet, to manage symptoms and support overall health.",
        "precaution_4": "Attend regular medical check-ups for monitoring and follow-up care, especially if undergoing treatment for fibroids."
    },
    "Fibromyalgia": {
        "precaution_1": "Develop a self-care plan that includes regular exercise, stress management techniques, and adequate sleep to improve symptoms and overall well-being.",
        "precaution_2": "Pace activities and prioritize tasks to avoid overexertion and exacerbation of symptoms.",
        "precaution_3": "Consider complementary therapies, such as acupuncture, massage, or cognitive behavioral therapy, to manage pain and improve quality of life.",
        "precaution_4": "Work with healthcare provider to explore medication options for symptom management, such as pain relievers, antidepressants, or anticonvulsants."
    },
    "Food Poisoning": {
        "precaution_1": "Practice proper food safety measures, including cooking foods to the appropriate temperature and refrigerating perishable foods promptly.",
        "precaution_2": "Avoid cross-contamination by keeping raw meats separate from other foods and using separate cutting boards and utensils.",
        "precaution_3": "Wash hands, utensils, and surfaces thoroughly before and after handling food to prevent spreading harmful bacteria.",
        "precaution_4": "Seek medical attention if experiencing symptoms of food poisoning, such as nausea, vomiting, diarrhea, or fever, especially if symptoms are severe or persistent."
    },
    "Frost Bite": {
        "precaution_1": "Limit exposure to cold temperatures, especially in windy or wet conditions.",
        "precaution_2": "Dress warmly in layers, covering exposed skin and extremities with insulated clothing, hats, gloves, and boots.",
        "precaution_3": "Stay hydrated and avoid alcohol and caffeine, which can increase susceptibility to frostbite.",
        "precaution_4": "Seek medical attention if experiencing symptoms of frostbite, such as numbness, tingling, or pale or discolored skin, and avoid rubbing or massaging affected areas."
    },
    "GERD": {
        "precaution_1": "Avoid trigger foods and beverages that can worsen GERD symptoms, such as spicy or acidic foods, caffeine, alcohol, and fatty or fried foods.",
        "precaution_2": "Eat smaller, more frequent meals and avoid lying down or bending over immediately after eating to reduce acid reflux.",
        "precaution_3": "Maintain a healthy weight through regular exercise and a balanced diet to minimize pressure on the abdomen and lower esophageal sphincter.",
        "precaution_4": "Take prescribed medications, such as proton pump inhibitors or H2-receptor antagonists, as directed by healthcare provider to reduce acid production and relieve symptoms."
    },
    "Gaming disorder": {
        "precaution_1": "Set limits on gaming time and prioritize other activities, such as physical exercise, socializing, and academic or work responsibilities.",
        "precaution_2": "Create a healthy gaming environment with designated gaming areas and regular breaks to prevent prolonged periods of screen time.",
        "precaution_3": "Monitor for signs of gaming addiction or excessive gaming behavior, such as neglecting personal hygiene, declining academic or work performance, or withdrawal from social activities.",
        "precaution_4": "Seek professional help, such as counseling or therapy, for individuals struggling with gaming disorder to address underlying issues and develop healthier coping mechanisms."
    },
    "Gangrene": {
        "precaution_1": "Practice good wound care by keeping wounds clean, dry, and covered to prevent infection.",
        "precaution_2": "Quit smoking and avoid exposure to secondhand smoke, as smoking impairs blood flow and increases the risk of gangrene.",
        "precaution_3": "Manage underlying health conditions, such as diabetes or peripheral artery disease, to reduce the risk of complications.",
        "precaution_4": "Seek medical attention promptly for any signs of tissue death, such as persistent pain, discoloration, or numbness, especially in the extremities."
    },
    "Gastroenteritis": {
        "precaution_1": "Stay hydrated by drinking clear fluids, such as water, broth, or oral rehydration solutions, to replace lost fluids and electrolytes.",
        "precaution_2": "Avoid solid foods until vomiting and diarrhea have subsided, then gradually reintroduce bland and easy-to-digest foods.",
        "precaution_3": "Practice good hand hygiene, including frequent handwashing with soap and water, to prevent spreading gastroenteritis-causing pathogens.",
        "precaution_4": "Seek medical attention if experiencing symptoms of severe dehydration, such as dizziness, rapid heartbeat, or reduced urine output."
    },
    "Genital herpes": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of herpes transmission, especially during outbreaks.",
        "precaution_2": "Inform sexual partners about herpes infection to allow for informed decisions and risk reduction strategies.",
        "precaution_3": "Take prescribed antiviral medications as directed by healthcare provider to manage outbreaks and reduce the risk of transmission.",
        "precaution_4": "Seek medical attention if experiencing symptoms of herpes, such as genital lesions, pain, or itching, especially if it is the first outbreak or symptoms are severe."
    },
    "Glaucoma": {
        "precaution_1": "Attend regular eye examinations to monitor for signs of glaucoma and other eye conditions.",
        "precaution_2": "Follow prescribed treatment plan, which may include eye drops, oral medications, or surgery, to manage intraocular pressure and prevent vision loss.",
        "precaution_3": "Avoid smoking and excessive alcohol consumption, as they can increase the risk of glaucoma progression.",
        "precaution_4": "Seek medical attention if experiencing symptoms such as blurry vision, eye pain, headache, or halos around lights."
    },
    "Goitre": {
        "precaution_1": "Consume iodine-rich foods, such as iodized salt, seafood, dairy products, and eggs, to prevent iodine deficiency and reduce the risk of goiter.",
        "precaution_2": "Avoid excessive consumption of goitrogenic foods, such as raw cruciferous vegetables and soy products, which can interfere with thyroid function.",
        "precaution_3": "Get regular medical check-ups and thyroid function tests to monitor for thyroid disorders and goiter.",
        "precaution_4": "Seek medical attention if experiencing symptoms of goiter, such as swelling in the neck, difficulty swallowing or breathing, or changes in voice."
    },
    "Gonorrhea": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of gonorrhea and other sexually transmitted infections.",
        "precaution_2": "Get tested for gonorrhea and other STIs regularly, especially if sexually active with multiple partners.",
        "precaution_3": "Notify sexual partners if diagnosed with gonorrhea to prevent further spread of the infection.",
        "precaution_4": "Complete prescribed course of antibiotics as directed by healthcare provider."
    },
    "Guillain-Barré syndrome": {
        "precaution_1": "Seek prompt medical attention if experiencing symptoms of Guillain-Barré syndrome, such as muscle weakness, tingling or numbness in extremities, or difficulty breathing.",
        "precaution_2": "Follow prescribed treatment plan, which may include intravenous immunoglobulin therapy or plasmapheresis, to manage symptoms and promote recovery.",
        "precaution_3": "Participate in physical therapy to improve muscle strength, mobility, and function during recovery.",
        "precaution_4": "Attend follow-up appointments for monitoring and support, especially to monitor for potential complications or relapses."
    },
    "Haemophilia": {
        "precaution_1": "Avoid activities that may increase the risk of injury or bleeding, such as contact sports or heavy lifting.",
        "precaution_2": "Seek medical advice before undergoing any surgical or dental procedures, and inform healthcare providers about the condition.",
        "precaution_3": "Keep an emergency medical kit with clotting factor medications and instructions for managing bleeding episodes.",
        "precaution_4": "Participate in a comprehensive care program with regular check-ups, genetic counseling, and support services."
    },
    "Hand, Foot and Mouth Disease": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water, especially after using the toilet or changing diapers.",
        "precaution_2": "Avoid close contact with individuals who are infected with hand, foot, and mouth disease, and avoid sharing utensils or personal items.",
        "precaution_3": "Disinfect frequently touched surfaces and objects, such as toys and doorknobs, to reduce the spread of the virus.",
        "precaution_4": "Encourage rest and hydration, and provide over-the-counter pain relievers to alleviate fever and discomfort."
    },
    "Heat-Related Illnesses and Heat waves": {
        "precaution_1": "Stay hydrated by drinking plenty of fluids, such as water, even if you do not feel thirsty.",
        "precaution_2": "Avoid prolonged exposure to high temperatures and direct sunlight, especially during the hottest parts of the day.",
        "precaution_3": "Wear lightweight, light-colored, and loose-fitting clothing to help reflect sunlight and heat away from the body.",
        "precaution_4": "Seek shade or air-conditioned environments if feeling overheated, and take cool showers or baths to lower body temperature."
    },
    "Hepatitis": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of hepatitis transmission, especially for hepatitis B and C.",
        "precaution_2": "Avoid sharing needles, razors, or other items that may come into contact with blood or bodily fluids.",
        "precaution_3": "Get vaccinated against hepatitis A and B as recommended by healthcare providers, and ensure timely booster shots if necessary.",
        "precaution_4": "Seek medical attention if experiencing symptoms of hepatitis, such as jaundice, fatigue, nausea, or abdominal pain."
    },
    "Hepatitis A": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water, especially after using the toilet or changing diapers.",
        "precaution_2": "Avoid consuming contaminated food or water, and ensure proper sanitation and food handling practices.",
        "precaution_3": "Get vaccinated against hepatitis A as recommended by healthcare providers, especially before traveling to areas with high rates of infection.",
        "precaution_4": "Seek medical attention if experiencing symptoms of hepatitis A, such as jaundice, fatigue, nausea, or abdominal pain."
    },
    "Hepatitis B": {
        "precaution_1": "Practice safe sex by using condoms to reduce the risk of hepatitis B transmission, and consider vaccination for sexual partners.",
        "precaution_2": "Avoid sharing needles, razors, or other items that may come into contact with blood or bodily fluids.",
        "precaution_3": "Get vaccinated against hepatitis B as recommended by healthcare providers, and ensure timely booster shots if necessary.",
        "precaution_4": "Seek medical attention if experiencing symptoms of hepatitis B, such as jaundice, fatigue, nausea, or abdominal pain."
    },
    "Hepatitis C": {
        "precaution_1": "Avoid sharing needles, razors, or other items that may come into contact with blood or bodily fluids.",
        "precaution_2": "Practice safe sex by using condoms to reduce the risk of hepatitis C transmission, and consider vaccination for sexual partners.",
        "precaution_3": "Seek medical attention if undergoing medical or dental procedures to ensure proper sterilization of equipment and prevention of infection.",
        "precaution_4": "Get tested for hepatitis C if at risk, such as individuals with a history of injection drug use or blood transfusions before 1992."
    },
    "Hepatitis D": {
        "precaution_1": "Get vaccinated against hepatitis B, as hepatitis D can only infect individuals already infected with hepatitis B virus.",
        "precaution_2": "Avoid sharing needles, razors, or other items that may come into contact with blood or bodily fluids.",
        "precaution_3": "Seek medical attention if experiencing symptoms of hepatitis D, such as jaundice, fatigue, nausea, or abdominal pain.",
        "precaution_4": "Follow prescribed treatment plan, which may include antiviral medications, to manage hepatitis D infection."
    },
    "Hepatitis E": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water, especially after using the toilet or changing diapers.",
        "precaution_2": "Avoid consuming contaminated food or water, and ensure proper sanitation and food handling practices.",
        "precaution_3": "Seek medical attention if experiencing symptoms of hepatitis E, such as jaundice, fatigue, nausea, or abdominal pain.",
        "precaution_4": "Get vaccinated against hepatitis E if traveling to areas with high rates of infection or if advised by healthcare providers."
    },
    "Herpes Simplex": {
        "precaution_1": "Practice safe sex by using condoms and avoiding sexual contact during outbreaks to reduce the risk of herpes transmission.",
        "precaution_2": "Inform sexual partners about herpes infection to allow for informed decisions and risk reduction strategies.",
        "precaution_3": "Take prescribed antiviral medications as directed by healthcare provider to manage outbreaks and reduce the risk of transmission.",
        "precaution_4": "Seek medical attention if experiencing symptoms of herpes, such as genital lesions, pain, or itching, especially if it is the first outbreak or symptoms are severe."
    },
    "High risk pregnancy": {
        "precaution_1": "Attend regular prenatal care appointments for monitoring and management of high-risk pregnancy factors, such as pre-existing medical conditions or pregnancy complications.",
        "precaution_2": "Follow prescribed treatment plans and lifestyle recommendations provided by healthcare providers to optimize maternal and fetal health.",
        "precaution_3": "Monitor for signs of pregnancy complications, such as high blood pressure, gestational diabetes, or preterm labor, and seek medical attention promptly if symptoms arise.",
        "precaution_4": "Seek emotional support from healthcare professionals, support groups, and loved ones to cope with the challenges and uncertainties of high-risk pregnancy."
    },
    "Human papillomavirus": {
        "precaution_1": "Get vaccinated against HPV as recommended by healthcare providers, especially for adolescents and young adults.",
        "precaution_2": "Practice safe sex by using condoms to reduce the risk of HPV transmission, although they do not provide complete protection.",
        "precaution_3": "Get screened for HPV-related cancers, such as cervical cancer, according to recommended guidelines provided by healthcare providers.",
        "precaution_4": "Seek medical attention if experiencing symptoms of HPV infection, such as genital warts or abnormal Pap test results, and follow up with appropriate care."
    },
    "Hypermetropia": {
        "precaution_1": "Attend regular eye examinations to monitor vision changes and detect hypermetropia early.",
        "precaution_2": "Wear prescribed corrective lenses, such as glasses or contact lenses, to improve vision and reduce eye strain.",
        "precaution_3": "Follow recommended lifestyle habits, such as maintaining a balanced diet and staying physically active, to support overall eye health.",
        "precaution_4": "Discuss surgical options, such as LASIK or photorefractive keratectomy (PRK), with an eye care professional if considering permanent vision correction."
    },
    "Hyperthyroidism": {
        "precaution_1": "Follow prescribed treatment plan, which may include antithyroid medications, radioactive iodine therapy, or thyroid surgery, to control thyroid hormone levels.",
        "precaution_2": "Avoid consuming excessive amounts of iodine-rich foods, such as seaweed or iodized salt, which can exacerbate hyperthyroidism.",
        "precaution_3": "Monitor thyroid function regularly through blood tests and follow up with healthcare providers for adjustments to treatment as needed.",
        "precaution_4": "Seek medical attention if experiencing symptoms of hyperthyroidism, such as rapid heartbeat, weight loss, tremors, or fatigue."
    },
    "Hypothyroid": {
        "precaution_1": "Follow prescribed treatment plan, which may include thyroid hormone replacement therapy, to restore thyroid hormone levels to normal.",
        "precaution_2": "Take thyroid medication consistently and as directed by healthcare provider, and avoid skipping doses or self-adjusting dosage without medical advice.",
        "precaution_3": "Attend regular thyroid function tests and medical check-ups to monitor treatment effectiveness and adjust medication dosage as needed.",
        "precaution_4": "Maintain a healthy lifestyle with balanced nutrition, regular exercise, and stress management techniques to support thyroid health."
    },
    "Hypotonia": {
        "precaution_1": "Engage in physical therapy programs tailored to improve muscle tone, strength, and coordination under the guidance of healthcare professionals.",
        "precaution_2": "Use adaptive equipment or assistive devices, such as braces, splints, or orthotics, to support mobility and daily activities as needed.",
        "precaution_3": "Monitor for signs of respiratory or swallowing difficulties, and seek medical attention if symptoms arise to prevent complications.",
        "precaution_4": "Create a safe environment at home and in daily activities to minimize the risk of falls or injuries, and provide support and supervision as necessary."
    },
    "Impetigo": {
        "precaution_1": "Practice good hygiene, including frequent handwashing with soap and water, especially after touching infected skin or lesions.",
        "precaution_2": "Avoid scratching or picking at impetigo sores to prevent spreading the infection to other areas of the body.",
        "precaution_3": "Keep affected skin clean and dry, and cover lesions with sterile bandages or dressings to prevent contamination and promote healing.",
        "precaution_4": "Seek medical attention if experiencing symptoms of impetigo, such as red sores, blisters, or yellowish crusts, especially if accompanied by fever or spreading rash."
    },
    "Inflammatory Bowel Disease": {
        "precaution_1": "Follow prescribed treatment plan, which may include medications, dietary changes, and lifestyle modifications, to manage symptoms and prevent flare-ups.",
        "precaution_2": "Maintain a healthy and balanced diet, avoiding trigger foods that may exacerbate symptoms, such as spicy or fatty foods.",
        "precaution_3": "Stay hydrated and drink plenty of fluids to prevent dehydration, especially during flare-ups with diarrhea.",
        "precaution_4": "Attend regular medical check-ups and screenings for monitoring disease activity, complications, and treatment effectiveness."
    },
    "Influenza": {
        "precaution_1": "Get vaccinated against influenza annually as recommended by healthcare providers, especially for high-risk individuals, such as young children, elderly adults, and individuals with chronic health conditions.",
        "precaution_2": "Practice good respiratory hygiene, including covering mouth and nose with a tissue or elbow when coughing or sneezing, and disposing of tissues properly.",
        "precaution_3": "Avoid close contact with individuals who are sick with influenza, and stay home from work or school if experiencing flu-like symptoms to prevent spreading the virus.",
        "precaution_4": "Seek medical attention if experiencing severe symptoms of influenza, such as difficulty breathing, persistent chest pain, or sudden dizziness."
    },
    "Insomnia": {
        "precaution_1": "Establish a regular sleep schedule with consistent bedtimes and wake-up times, even on weekends or holidays.",
        "precaution_2": "Create a comfortable sleep environment that is conducive to relaxation and rest, with minimal noise, light, and distractions.",
        "precaution_3": "Practice relaxation techniques, such as deep breathing exercises, progressive muscle relaxation, or meditation, to reduce stress and promote sleep.",
        "precaution_4": "Limit caffeine, nicotine, and alcohol intake, especially in the hours leading up to bedtime, as they can interfere with sleep quality and duration."
    },
    "Interstitial cystitis": {
        "precaution_1": "Follow prescribed treatment plan, which may include medications, bladder training, physical therapy, or dietary modifications, to manage symptoms and improve quality of life.",
        "precaution_2": "Avoid trigger foods and beverages that may exacerbate symptoms, such as caffeine, alcohol, spicy foods, citrus fruits, and artificial sweeteners.",
        "precaution_3": "Stay hydrated by drinking plenty of water throughout the day, and consider avoiding bladder irritants, such as bubble baths or scented hygiene products.",
        "precaution_4": "Practice stress management techniques, such as deep breathing exercises, mindfulness, or yoga, to reduce anxiety and tension that can worsen symptoms."
    },
    "Iritis": {
        "precaution_1": "Seek prompt medical attention if experiencing symptoms of iritis, such as eye pain, redness, sensitivity to light, or blurred vision.",
        "precaution_2": "Follow prescribed treatment plan, which may include corticosteroid eye drops, oral medications, or other anti-inflammatory treatments, to reduce inflammation and manage symptoms.",
        "precaution_3": "Protect the eyes from bright lights and sunlight by wearing sunglasses or avoiding exposure to harsh glare.",
        "precaution_4": "Attend follow-up appointments with an eye care professional for monitoring of iritis and adjustment of treatment as needed."
    },
    "Iron Deficiency Anemia": {
        "precaution_1": "Consume iron-rich foods, such as lean meats, poultry, fish, leafy green vegetables, beans, and fortified cereals, to replenish iron stores and prevent anemia.",
        "precaution_2": "Enhance iron absorption by pairing iron-rich foods with sources of vitamin C, such as citrus fruits, strawberries, bell peppers, or tomatoes.",
        "precaution_3": "Avoid consuming foods or substances that can inhibit iron absorption, such as excessive caffeine, calcium-rich foods, or antacids containing calcium or magnesium.",
        "precaution_4": "Consider iron supplementation under the guidance of a healthcare provider if unable to meet iron needs through diet alone, and follow recommended dosage and instructions."
    },
    "Irritable bowel syndrome": {
        "precaution_1": "Identify and avoid trigger foods and beverages that may exacerbate symptoms, such as fatty or fried foods, dairy products, caffeine, alcohol, or gas-producing foods.",
        "precaution_2": "Eat smaller, more frequent meals and chew food slowly to aid digestion and reduce the likelihood of triggering symptoms.",
        "precaution_3": "Stay hydrated by drinking plenty of fluids, especially water, and consider limiting intake of carbonated beverages and artificial sweeteners that may worsen symptoms.",
        "precaution_4": "Incorporate regular physical activity, stress management techniques, and relaxation exercises into daily routines to promote overall digestive health and symptom relief."
    },
    "Japanese Encephalitis": {
        "precaution_1": "Get vaccinated against Japanese encephalitis as recommended by healthcare providers, especially before traveling to areas where the virus is endemic or during outbreaks.",
        "precaution_2": "Prevent mosquito bites by using insect repellents containing DEET, wearing long-sleeved shirts, long pants, and socks, and staying indoors during peak mosquito activity times.",
        "precaution_3": "Use mosquito nets or screens on windows and doors, and sleep in air-conditioned or well-screened accommodations to prevent mosquito bites while sleeping.",
        "precaution_4": "Seek medical attention if experiencing symptoms of Japanese encephalitis, such as fever, headache, confusion, seizures, or paralysis, especially after traveling to endemic areas."
    },
    "Jaundice": {
        "precaution_1": "Identify and treat underlying causes of jaundice, such as liver disease, hepatitis, or bile duct obstruction, under the guidance of healthcare providers.",
        "precaution_2": "Maintain adequate hydration by drinking plenty of fluids, such as water or clear liquids, to support liver function and promote bile excretion.",
        "precaution_3": "Avoid consumption of alcohol and certain medications that can worsen liver damage or interfere with bile metabolism, as advised by healthcare providers.",
        "precaution_4": "Follow a balanced diet with emphasis on liver-friendly foods, such as fruits, vegetables, whole grains, lean proteins, and healthy fats, to support overall health and liver function."
    },
    "Kala-azar/ Leishmaniasis": {
        "precaution_1": "Prevent sand fly bites by using insect repellents containing DEET, wearing long-sleeved shirts, long pants, and socks, and staying indoors during dusk and dawn when sand flies are most active.",
        "precaution_2": "Use bed nets treated with insecticides and apply insecticides to living and sleeping areas to reduce the risk of sand fly bites and indoor transmission of the parasite.",
        "precaution_3": "Avoid outdoor activities in areas with known transmission of leishmaniasis, especially during peak sand fly activity periods.",
        "precaution_4": "Seek medical attention if experiencing symptoms of kala-azar/ leishmaniasis, such as fever, weight loss, enlarged spleen or liver, or skin sores, especially after traveling to endemic areas."
    },
    "Kaposi’s Sarcoma": {
        "precaution_1": "Seek medical advice and treatment for HIV infection and other immunosuppressive conditions that increase the risk of Kaposi's sarcoma.",
        "precaution_2": "Monitor for signs of Kaposi's sarcoma, such as skin lesions, nodules, or discoloration, and seek prompt medical attention if symptoms arise.",
        "precaution_3": "Follow prescribed treatment plan for Kaposi's sarcoma, which may include chemotherapy, radiation therapy, or targeted therapies, under the guidance of healthcare providers.",
        "precaution_4": "Attend regular medical check-ups and screenings to monitor disease progression, treatment effectiveness, and overall health status."
    },
    "Keratoconjunctivitis Sicca (Dry eye syndrome)": {
        "precaution_1": "Use artificial tears or lubricating eye drops to relieve dryness and irritation, and consider using a humidifier to add moisture to indoor air.",
        "precaution_2": "Avoid environmental factors that can worsen dry eye symptoms, such as exposure to wind, smoke, dust, or dry air, and use protective eyewear when necessary.",
        "precaution_3": "Take regular breaks during activities that require prolonged visual concentration, such as reading or using electronic devices, to reduce eye strain and dryness.",
        "precaution_4": "Discuss with an eye care professional about other treatment options for dry eye syndrome, such as prescription medications, tear duct plugs, or procedures to increase tear production."
    },
    "Keratoconus": {
        "precaution_1": "Attend regular eye examinations with an optometrist or ophthalmologist to monitor changes in vision and corneal shape associated with keratoconus.",
        "precaution_2": "Wear prescribed corrective lenses, such as glasses or contact lenses, to improve vision and correct refractive errors caused by keratoconus.",
        "precaution_3": "Consider specialized contact lenses, such as rigid gas permeable lenses or scleral lenses, for improved comfort and vision correction in individuals with advanced keratoconus.",
        "precaution_4": "Discuss with an eye care professional about surgical options for keratoconus, such as corneal cross-linking, intrastromal corneal ring segments, or corneal transplant, if necessary."
    },
    "Kuru": {
        "precaution_1": "Avoid consumption of human brain or nervous tissue, which is believed to be the primary route of transmission for the prion responsible for kuru.",
        "precaution_2": "Practice safe handling and preparation of deceased individuals, including proper burial practices and avoiding contact with open wounds or mucous membranes.",
        "precaution_3": "Seek medical attention if experiencing symptoms of kuru, such as tremors, coordination difficulties, muscle stiffness, or cognitive impairment.",
        "precaution_4": "Participate in public health initiatives and awareness campaigns to educate at-risk populations about the risks of kuru and preventive measures."
    },
    "Laryngitis": {
        "precaution_1": "Rest the voice and avoid speaking or singing loudly to allow the vocal cords to heal and reduce irritation.",
        "precaution_2": "Stay hydrated by drinking plenty of fluids, such as water or herbal teas, to soothe the throat and prevent dehydration.",
        "precaution_3": "Avoid exposure to irritants, such as cigarette smoke, pollutants, or dry air, that can worsen laryngitis symptoms and prolong recovery.",
        "precaution_4": "Use a humidifier to add moisture to indoor air and prevent dryness, especially during the winter months or in dry climates."
    },
    "Lead poisoning": {
        "precaution_1": "Identify and remove sources of lead exposure in the environment, such as lead-based paint, contaminated soil, or lead pipes, especially in older homes or buildings.",
        "precaution_2": "Wash hands and surfaces frequently to reduce exposure to lead dust and particles, especially before eating or preparing food.",
        "precaution_3": "Ensure a balanced diet with adequate intake of calcium, iron, and vitamin C, which can help reduce the absorption of lead in the body.",
        "precaution_4": "Seek medical attention if experiencing symptoms of lead poisoning, such as abdominal pain, headaches, memory loss, or developmental delays, especially in children."
    },
    "Legionellosis": {
        "precaution_1": "Prevent Legionella bacteria growth in water systems by maintaining proper temperature and disinfection levels, and conducting regular maintenance and cleaning of plumbing systems.",
        "precaution_2": "Avoid exposure to aerosolized water droplets from sources such as hot tubs, cooling towers, decorative fountains, or air conditioning systems with inadequate maintenance or disinfection.",
        "precaution_3": "Seek prompt medical attention if experiencing symptoms of legionellosis, such as fever, cough, shortness of breath, muscle aches, or headaches, especially after exposure to potential sources of Legionella contamination.",
        "precaution_4": "Follow prescribed treatment plan for legionellosis, which may include antibiotics, supportive care, and hospitalization in severe cases, under the guidance of healthcare providers."
    },
    "Leprosy": {
        "precaution_1": "Get vaccinated against leprosy as recommended by healthcare providers, especially for individuals living in or traveling to areas with high rates of infection.",
        "precaution_2": "Practice good hygiene, including frequent handwashing with soap and water, and avoid sharing personal items, such as towels or clothing, with individuals who have leprosy.",
        "precaution_3": "Seek early medical evaluation and treatment if noticing symptoms of leprosy, such as skin lesions, numbness, or weakness in hands and feet.",
        "precaution_4": "Participate in leprosy awareness campaigns and community health initiatives to reduce stigma, promote early detection, and improve access to treatment and support services."
    },
    "Leptospirosis": {
        "precaution_1": "Avoid contact with urine or body fluids from infected animals, such as rodents, livestock, or wildlife, especially in flood-prone or rural areas where leptospirosis is endemic.",
        "precaution_2": "Wear protective clothing, such as gloves and boots, when handling potentially contaminated soil, water, or animal waste, and wash hands thoroughly with soap and water afterwards.",
        "precaution_3": "Take precautions during outdoor activities, such as camping, hiking, or farming, to minimize exposure to potentially contaminated water sources, soil, or animal habitats.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms of leptospirosis, such as fever, headache, muscle aches, nausea, or jaundice, especially after potential exposure to the bacteria."
    },
    "Leukemia": {
        "precaution_1": "Follow prescribed treatment plan for leukemia, which may include chemotherapy, radiation therapy, targeted therapy, immunotherapy, or stem cell transplant, under the guidance of healthcare providers.",
        "precaution_2": "Monitor for signs of infection or bleeding, and seek prompt medical attention for any unusual symptoms or complications.",
        "precaution_3": "Maintain a balanced diet with adequate nutrition to support overall health and recovery during leukemia treatment.",
        "precaution_4": "Participate in support groups, counseling, or therapy to cope with the emotional and psychological challenges of living with leukemia and undergoing treatment."
    },
    "Lice": {
        "precaution_1": "Treat infested individuals and their close contacts with appropriate lice-killing products, such as medicated shampoos or lotions, according to product instructions and healthcare provider recommendations.",
        "precaution_2": "Use a fine-toothed comb or special nit comb to remove lice eggs (nits) and dead lice from the hair shafts, and repeat combing sessions as needed to ensure thorough removal.",
        "precaution_3": "Wash bedding, clothing, and personal items used by infested individuals in hot water and dry them on high heat to kill lice and prevent re-infestation.",
        "precaution_4": "Avoid sharing personal items, such as hats, combs, brushes, or towels, with individuals who have lice, and encourage good personal hygiene habits to prevent transmission."
    },
    "Lung cancer": {
        "precaution_1": "Quit smoking and avoid exposure to secondhand smoke to reduce the risk of lung cancer, and seek smoking cessation support and resources if needed.",
        "precaution_2": "Limit exposure to environmental carcinogens, such as asbestos, radon, diesel exhaust, and air pollution, by taking precautions in occupational and living environments.",
        "precaution_3": "Participate in lung cancer screening programs, especially if at high risk due to smoking history or other risk factors, and follow up with healthcare providers for timely evaluation and management of abnormalities.",
        "precaution_4": "Seek medical attention if experiencing symptoms of lung cancer, such as persistent cough, chest pain, shortness of breath, coughing up blood, or unexplained weight loss, and undergo diagnostic tests as recommended by healthcare providers."
    },
    "Lupus erythematosus": {
        "precaution_1": "Follow prescribed treatment plan for lupus, which may include medications, lifestyle modifications, and regular medical monitoring, under the guidance of healthcare providers.",
        "precaution_2": "Manage stress through relaxation techniques, mindfulness, support groups, or counseling to reduce the risk of lupus flares and improve overall well-being.",
        "precaution_3": "Protect the skin from ultraviolet (UV) radiation by wearing sunscreen, protective clothing, and hats, and avoiding prolonged sun exposure, which can trigger lupus skin lesions and flare-ups.",
        "precaution_4": "Monitor for signs of lupus complications, such as organ involvement, cardiovascular disease, or kidney damage, and seek prompt medical attention for any new or worsening symptoms."
    },
    "Lyme disease": {
        "precaution_1": "Prevent tick bites by wearing protective clothing, such as long-sleeved shirts, long pants, and socks, and using insect repellents containing DEET or permethrin.",
        "precaution_2": "Check for ticks on the body and clothing after outdoor activities in wooded or grassy areas, and promptly remove attached ticks with tweezers by grasping the mouthparts close to the skin and pulling straight out.",
        "precaution_3": "Seek medical attention if experiencing symptoms of Lyme disease, such as fever, headache, fatigue, muscle aches, joint pain, or skin rash, especially after potential tick exposure.",
        "precaution_4": "Follow prescribed treatment plan for Lyme disease, which may include antibiotics, supportive care, and management of symptoms and complications, under the guidance of healthcare providers."
    },
    "Lymphoma": {
        "precaution_1": "Follow prescribed treatment plan for lymphoma, which may include chemotherapy, radiation therapy, targeted therapy, immunotherapy, or stem cell transplant, under the guidance of healthcare providers.",
        "precaution_2": "Maintain a balanced diet with adequate nutrition to support overall health and recovery during lymphoma treatment, and discuss any dietary concerns or restrictions with healthcare providers.",
        "precaution_3": "Monitor for signs of infection or bleeding, and seek prompt medical attention for any unusual symptoms or complications.",
        "precaution_4": "Participate in support groups, counseling, or therapy to cope with the emotional and psychological challenges of living with lymphoma and undergoing treatment."
    },
    "Mad cow disease": {
        "precaution_1": "Avoid consumption of beef or beef products from cattle that may be infected with the prions responsible for mad cow disease, especially in countries with known cases of bovine spongiform encephalopathy (BSE).",
        "precaution_2": "Follow food safety guidelines and regulations for handling and processing beef products to minimize the risk of contamination with prions.",
        "precaution_3": "Monitor for signs of Creutzfeldt-Jakob disease (CJD), the human form of mad cow disease, such as cognitive decline, memory loss, muscle stiffness, or personality changes, and seek medical attention if symptoms arise.",
        "precaution_4": "Participate in public health surveillance and monitoring programs to detect and prevent the spread of mad cow disease and related prion diseases in both animals and humans."
    },
    "Malaria": {
        "precaution_1": "Take prescribed antimalarial medications as recommended by healthcare providers, and adhere to the prescribed dosage and duration of treatment to prevent malaria infection.",
        "precaution_2": "Prevent mosquito bites by using insect repellents containing DEET, wearing long-sleeved shirts, long pants, and socks, and sleeping under insecticide-treated bed nets.",
        "precaution_3": "Seek prompt medical attention if experiencing symptoms of malaria, such as fever, chills, sweats, headache, muscle aches, or fatigue, especially after potential exposure to malaria-endemic areas.",
        "precaution_4": "Participate in malaria prevention programs, such as vector control measures, environmental management, and community education, to reduce the risk of transmission in endemic regions."
    },
    "Marburg fever": {
        "precaution_1": "Prevent contact with bodily fluids, tissues, or blood of infected individuals or animals, especially in healthcare settings, by using appropriate personal protective equipment (PPE) and infection control measures.",
        "precaution_2": "Practice good hand hygiene, including frequent handwashing with soap and water, especially after caring for sick individuals or handling potentially contaminated materials.",
        "precaution_3": "Isolate suspected or confirmed cases of Marburg fever to prevent further transmission of the virus to others, and follow recommended guidelines for infection control and quarantine.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms of Marburg fever, such as fever, headache, muscle aches, nausea, vomiting, diarrhea, or bleeding, especially after potential exposure to the virus."
    },
    "Mastitis": {
        "precaution_1": "Ensure proper breastfeeding techniques, including correct positioning and latching, to prevent nipple trauma and milk stasis that can contribute to mastitis.",
        "precaution_2": "Empty the breasts regularly by breastfeeding or pumping milk to prevent engorgement and reduce the risk of mastitis, especially during the early postpartum period.",
        "precaution_3": "Practice good hand hygiene before and after breastfeeding or handling breast pumps, and ensure proper cleaning and sterilization of breastfeeding equipment to prevent bacterial contamination.",
        "precaution_4": "Seek medical attention if experiencing symptoms of mastitis, such as breast pain, redness, swelling, warmth, or fever, and follow prescribed treatment, including antibiotics and supportive care, as needed."
    },
    "Measles": {
        "precaution_1": "Get vaccinated against measles as recommended by healthcare providers, especially for children, adolescents, and adults who are unvaccinated or have incomplete vaccination status.",
        "precaution_2": "Practice good respiratory hygiene, including covering mouth and nose with a tissue or elbow when coughing or sneezing, and disposing of tissues properly.",
        "precaution_3": "Avoid close contact with individuals who are sick with measles, and stay home from work or school if experiencing symptoms of the disease to prevent spreading the virus.",
        "precaution_4": "Seek medical attention if experiencing severe symptoms of measles, such as high fever, cough, runny nose, rash, or red, watery eyes, especially if unvaccinated or at high risk for complications."
    },
    "Melanoma": {
        "precaution_1": "Practice sun safety measures, including wearing protective clothing, hats, and sunglasses, and using sunscreen with a high sun protection factor (SPF) to reduce UV exposure and prevent sunburn.",
        "precaution_2": "Avoid tanning beds and artificial UV radiation sources, which can increase the risk of melanoma and other skin cancers.",
        "precaution_3": "Perform regular skin self-examinations to monitor for changes in moles, freckles, or skin lesions, and seek medical evaluation for any suspicious or evolving skin abnormalities.",
        "precaution_4": "Attend regular skin cancer screenings with a dermatologist, especially for individuals with a personal or family history of melanoma or other skin cancers, and discuss individualized risk assessment and preventive strategies."
    },
    "Middle East respiratory syndrome coronavirus (MERS‐CoV)": {
        "precaution_1": "Practice good respiratory hygiene, including covering mouth and nose with a tissue or elbow when coughing or sneezing, and disposing of tissues properly.",
        "precaution_2": "Wash hands frequently with soap and water for at least 20 seconds, especially after coughing or sneezing, or use alcohol-based hand sanitizers if soap and water are not available.",
        "precaution_3": "Avoid close contact with individuals who are sick with respiratory symptoms, and stay home from work or school if experiencing symptoms of acute respiratory infection, such as fever, cough, or difficulty breathing.",
        "precaution_4": "Seek medical attention if experiencing severe symptoms of MERS-CoV infection, such as high fever, cough, shortness of breath, or respiratory distress, especially after traveling to areas with known MERS-CoV transmission or contact with camels."
    },
    "Migraine": {
        "precaution_1": "Identify and avoid triggers that may precipitate migraine attacks, such as certain foods or beverages, lack of sleep, stress, hormonal changes, or sensory stimuli.",
        "precaution_2": "Maintain a regular sleep schedule with consistent bedtimes and wake-up times, and practice good sleep hygiene habits to promote restful and uninterrupted sleep.",
        "precaution_3": "Manage stress through relaxation techniques, mindfulness, biofeedback, or counseling to reduce tension and anxiety that can contribute to migraine episodes.",
        "precaution_4": "Take prescribed medications for migraine prevention or acute treatment as recommended by healthcare providers, and follow dosage instructions carefully to maximize effectiveness and minimize side effects."
    },
    "Mononucleosis": {
        "precaution_1": "Get plenty of rest and avoid strenuous physical activities to allow the body to recover from mononucleosis and prevent complications, such as spleen rupture.",
        "precaution_2": "Stay hydrated by drinking plenty of fluids, such as water, herbal teas, or electrolyte solutions, to prevent dehydration and promote recovery.",
        "precaution_3": "Avoid close contact with individuals who have mononucleosis, and refrain from kissing or sharing utensils, drinking glasses, or other personal items to prevent spreading the virus.",
        "precaution_4": "Seek medical attention if experiencing severe symptoms of mononucleosis, such as high fever, severe sore throat, difficulty swallowing, swollen tonsils, or persistent fatigue, especially if symptoms worsen or persist for more than a few weeks."
    },
    "Mouth Breathing": {
        "precaution_1": "Identify and address underlying causes of mouth breathing, such as nasal congestion, allergies, sinusitis, or anatomical abnormalities, with appropriate medical evaluation and treatment.",
        "precaution_2": "Practice nasal breathing techniques, such as nasal irrigation, steam inhalation, or nasal strips, to improve airflow and reduce the need for mouth breathing.",
        "precaution_3": "Maintain optimal oral hygiene by brushing teeth regularly, flossing daily, and attending regular dental check-ups to prevent dental problems associated with chronic mouth breathing.",
        "precaution_4": "Seek advice from healthcare professionals, such as ENT specialists, allergists, or dentists, for personalized evaluation and management of mouth breathing, especially if experiencing persistent symptoms or complications."
    },
    "Multiple myeloma": {
        "precaution_1": "Follow prescribed treatment plan for multiple myeloma, which may include chemotherapy, targeted therapy, immunotherapy, stem cell transplant, or supportive care, under the guidance of healthcare providers.",
        "precaution_2": "Maintain a balanced diet with adequate nutrition to support overall health and recovery during multiple myeloma treatment, and discuss any dietary concerns or restrictions with healthcare providers.",
        "precaution_3": "Monitor for signs of infection, anemia, bleeding, or other complications, and seek prompt medical attention for any unusual symptoms or changes in health status.",
        "precaution_4": "Participate in support groups, counseling, or therapy to cope with the emotional and psychological challenges of living with multiple myeloma and undergoing treatment."
    },
    "Multiple sclerosis": {
        "precaution_1": "Follow prescribed treatment plan for multiple sclerosis, which may include disease-modifying medications, symptom management therapies, physical therapy, and lifestyle modifications, under the guidance of healthcare providers.",
        "precaution_2": "Stay physically active with regular exercise, such as walking, swimming, or yoga, to improve mobility, strength, balance, and overall well-being.",
        "precaution_3": "Manage stress through relaxation techniques, mindfulness, support groups, or counseling to reduce emotional strain and minimize the impact of stress on MS symptoms.",
        "precaution_4": "Monitor for signs of disease progression or relapse, and seek medical attention for any new or worsening symptoms, complications, or side effects of medications."
    },
    "Mumps": {
        "precaution_1": "Get vaccinated against mumps as recommended by healthcare providers, especially for children, adolescents, and adults who are unvaccinated or have incomplete vaccination status.",
        "precaution_2": "Practice good respiratory hygiene, including covering mouth and nose with a tissue or elbow when coughing or sneezing, and disposing of tissues properly.",
        "precaution_3": "Avoid close contact with individuals who are sick with mumps, and stay home from work or school if experiencing symptoms of the disease to prevent spreading the virus.",
        "precaution_4": "Seek medical attention if experiencing severe symptoms of mumps, such as high fever, headache, swollen salivary glands, muscle aches, or fatigue, especially if unvaccinated or at high risk for complications."
    },
    "Muscular dystrophy": {
        "precaution_1": "Follow prescribed treatment plan for muscular dystrophy, which may include physical therapy, occupational therapy, mobility aids, orthopedic devices, and supportive care, under the guidance of healthcare providers.",
        "precaution_2": "Stay physically active within individual abilities and limitations, and participate in appropriate exercises or activities to maintain muscle strength, flexibility, and range of motion.",
        "precaution_3": "Use assistive devices, adaptive equipment, and environmental modifications to enhance independence, mobility, and safety in daily activities and living environments.",
        "precaution_4": "Participate in support groups, counseling, or therapy to cope with the emotional and psychological challenges of living with muscular dystrophy and to connect with others facing similar experiences."
    },
    "Myasthenia gravis": {
        "precaution_1": "Follow prescribed treatment plan for myasthenia gravis, which may include medications, thymectomy, immunotherapy, plasma exchange, or supportive care, under the guidance of healthcare providers.",
        "precaution_2": "Conserve energy and prioritize activities to prevent fatigue and minimize the risk of exacerbating muscle weakness or symptoms of myasthenia gravis.",
        "precaution_3": "Manage stress through relaxation techniques, mindfulness, support groups, or counseling to reduce emotional strain and improve coping mechanisms for living with chronic illness.",
        "precaution_4": "Avoid medications that may exacerbate myasthenia gravis symptoms or interfere with neuromuscular transmission, and consult with healthcare providers about safe and appropriate treatment options for other medical conditions."
    },
    "Myelitis": {
        "precaution_1": "Follow prescribed treatment plan for myelitis, which may include medications, physical therapy, rehabilitation, pain management, and supportive care, under the guidance of healthcare providers.",
        "precaution_2": "Maintain a balanced diet with adequate nutrition to support overall health and recovery during myelitis treatment, and discuss any dietary concerns or restrictions with healthcare providers.",
        "precaution_3": "Participate in physical therapy, occupational therapy, or rehabilitation programs to improve mobility, strength, coordination, and functional abilities affected by myelitis.",
        "precaution_4": "Monitor for signs of disease progression, complications, or relapse, and seek medical attention for any new or worsening symptoms, functional limitations, or concerns about treatment."
    },
    "Myocardial Infarction (Heart Attack)": {
        "precaution_1": "Seek emergency medical attention immediately if experiencing symptoms of a heart attack, such as chest pain or discomfort, shortness of breath, nausea, lightheadedness, or cold sweats.",
        "precaution_2": "Chew and swallow aspirin (if available) as soon as possible after onset of heart attack symptoms, unless contraindicated, to help reduce blood clot formation and minimize heart muscle damage.",
        "precaution_3": "Follow prescribed treatment plan for myocardial infarction, which may include medications, lifestyle modifications, cardiac rehabilitation, and interventions such as percutaneous coronary intervention (PCI) or coronary artery bypass grafting (CABG), under the guidance of healthcare providers.",
        "precaution_4": "Participate in secondary prevention strategies to reduce the risk of recurrent heart attacks, including smoking cessation, regular exercise, heart-healthy diet, blood pressure and cholesterol management, and adherence to prescribed medications."
    },
    "Myopia": {
        "precaution_1": "Attend regular eye examinations with an optometrist or ophthalmologist to monitor changes in vision and refractive error associated with myopia.",
        "precaution_2": "Wear prescribed corrective lenses, such as glasses or contact lenses, to improve vision and correct nearsightedness caused by myopia.",
        "precaution_3": "Consider orthokeratology (ortho-k) or corneal reshaping therapy to temporarily correct myopia and reduce dependence on corrective lenses, especially in children and adolescents.",
        "precaution_4": "Discuss with an eye care professional about surgical options for myopia, such as LASIK or photorefractive keratectomy (PRK), if interested in permanent vision correction and eligible for refractive surgery."
    },
    "Narcolepsy": {
        "precaution_1": "Follow prescribed treatment plan for narcolepsy, which may include medications, lifestyle modifications, and behavioral therapies, under the guidance of healthcare providers.",
        "precaution_2": "Maintain a regular sleep schedule with consistent bedtimes and wake-up times, and practice good sleep hygiene habits to promote restful and uninterrupted sleep.",
        "precaution_3": "Take short naps (10-20 minutes) as needed to manage excessive daytime sleepiness and improve alertness, but avoid long naps that can disrupt nighttime sleep patterns.",
        "precaution_4": "Create a safe sleep environment, such as a quiet, dark, and comfortable bedroom, to minimize disturbances and optimize sleep quality for individuals with narcolepsy."
    },
    "Nasal Polyps": {
        "precaution_1": "Seek medical evaluation and treatment for nasal polyps, especially if experiencing symptoms such as nasal congestion, difficulty breathing, sinus pressure, or reduced sense of smell.",
        "precaution_2": "Manage underlying conditions or triggers associated with nasal polyps, such as allergies, chronic sinusitis, or asthma, with appropriate medications, lifestyle modifications, and preventive measures.",
        "precaution_3": "Use nasal saline irrigation or nasal corticosteroid sprays as directed by healthcare providers to reduce inflammation, improve nasal drainage, and alleviate symptoms of nasal polyps.",
        "precaution_4": "Consider surgical options, such as endoscopic sinus surgery, to remove nasal polyps and improve nasal airflow and sinus function, especially for individuals with severe symptoms or polyps that do not respond to other treatments."
    },
    "Nausea and Vomiting of Pregnancy and  Hyperemesis gravidarum": {
        "precaution_1": "Stay hydrated by drinking small amounts of fluids frequently, such as water, ginger ale, or clear broth, and avoid large meals or drinking too much at once to minimize nausea and vomiting.",
        "precaution_2": "Eat small, frequent meals or snacks throughout the day, focusing on bland, easily digestible foods such as crackers, toast, rice, bananas, or applesauce, to alleviate nausea and prevent hunger-induced vomiting.",
        "precaution_3": "Avoid triggers that may exacerbate nausea and vomiting, such as strong odors, greasy or spicy foods, caffeine, or exposure to motion or heat, and practice relaxation techniques or distraction methods to manage symptoms.",
        "precaution_4": "Seek medical attention if experiencing severe or persistent symptoms of nausea and vomiting, dehydration, weight loss, or electrolyte imbalances, and discuss treatment options with healthcare providers, including medications, IV fluids, or hospitalization if necessary."
    },
    "Necrotizing Fasciitis": {
        "precaution_1": "Seek immediate medical attention if suspecting necrotizing fasciitis, especially if experiencing symptoms such as severe pain, redness, swelling, or skin changes in the affected area, especially after injury or surgery.",
        "precaution_2": "Maintain good wound care practices, including cleaning and dressing wounds promptly, and avoiding contaminated water, soil, or other sources of infection that can increase the risk of necrotizing fasciitis.",
        "precaution_3": "Monitor for signs of infection or tissue damage, such as fever, chills, fatigue, or discolored skin, and seek prompt medical evaluation for any new or worsening symptoms.",
        "precaution_4": "Undergo surgical debridement and aggressive antibiotic therapy as part of treatment for necrotizing fasciitis, and follow up with healthcare providers for ongoing wound care, monitoring, and rehabilitation."
    },
    "Neonatal Respiratory Disease Syndrome(NRDS)": {
        "precaution_1": "Provide supportive care and monitoring for premature or high-risk infants at risk for neonatal respiratory distress syndrome (NRDS), including supplemental oxygen, respiratory support, and management of complications.",
        "precaution_2": "Administer antenatal corticosteroids to pregnant individuals at risk for preterm birth to accelerate fetal lung maturation and reduce the severity of NRDS in newborns, under the guidance of healthcare providers.",
        "precaution_3": "Implement strategies to prevent preterm birth and optimize neonatal outcomes, such as prenatal care, maternal health interventions, and neonatal intensive care unit (NICU) support for preterm infants.",
        "precaution_4": "Educate parents and caregivers about the signs and symptoms of NRDS, the importance of early detection and treatment, and the long-term implications for infant health and development, to facilitate informed decision-making and family-centered care."
    },
    "Neoplasm": {
        "precaution_1": "Seek prompt medical evaluation and diagnostic testing for any suspicious or abnormal growths, lumps, or masses, especially if accompanied by symptoms such as pain, bleeding, or changes in size, shape, or color.",
        "precaution_2": "Follow recommended cancer screening guidelines and participate in routine screenings for early detection of neoplasms, such as mammography for breast cancer, colonoscopy for colorectal cancer, or Pap smear for cervical cancer.",
        "precaution_3": "Adopt a healthy lifestyle with regular physical activity, balanced nutrition, tobacco cessation, and sun safety practices to reduce the risk of developing neoplasms and other chronic diseases.",
        "precaution_4": "Undergo appropriate treatment for neoplasms, such as surgery, chemotherapy, radiation therapy, immunotherapy, or targeted therapy, under the guidance of healthcare providers, and participate in supportive care and survivorship programs."
    },
    "Neuralgia": {
        "precaution_1": "Identify and manage underlying causes of neuralgia, such as nerve compression, injury, infection, inflammation, or chronic medical conditions, with appropriate medical evaluation and treatment.",
        "precaution_2": "Use medications for pain management, such as analgesics, anti-inflammatories, anticonvulsants, or antidepressants, as prescribed by healthcare providers, to alleviate neuralgia symptoms and improve quality of life.",
        "precaution_3": "Explore non-pharmacological pain relief options, such as physical therapy, acupuncture, massage therapy, nerve blocks, or transcutaneous electrical nerve stimulation (TENS), to complement medical treatment and reduce reliance on medications.",
        "precaution_4": "Seek advice from healthcare professionals, such as neurologists, pain specialists, or physical therapists, for personalized evaluation and management of neuralgia, especially if experiencing persistent symptoms or complications."
    },
    "Nipah virus infection": {
        "precaution_1": "Avoid direct contact with sick or dead animals, especially bats, pigs, or other livestock, as potential sources of Nipah virus infection, and refrain from handling or consuming raw fruits, vegetables, or animal products from affected areas.",
        "precaution_2": "Practice good hand hygiene, including frequent handwashing with soap and water, especially after handling animals, animal products, or contaminated materials, to reduce the risk of Nipah virus transmission.",
        "precaution_3": "Implement infection control measures, such as isolation, quarantine, and personal protective equipment (PPE), in healthcare settings to prevent nosocomial transmission of Nipah virus among patients, caregivers, and healthcare workers.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms of Nipah virus infection, such as fever, headache, dizziness, altered consciousness, respiratory symptoms, or neurological deficits, especially after potential exposure to the virus."
    },
    "Obesity": {
        "precaution_1": "Adopt a balanced diet with reduced calorie intake and healthy food choices, such as fruits, vegetables, whole grains, lean proteins, and low-fat dairy products, to achieve and maintain a healthy weight.",
        "precaution_2": "Engage in regular physical activity and exercise, such as brisk walking, jogging, cycling, swimming, or strength training, to promote weight loss, improve fitness, and prevent weight regain.",
        "precaution_3": "Set realistic goals for weight loss and behavior change, and track progress using methods such as food diaries, exercise logs, or mobile apps to monitor calorie intake, physical activity, and health outcomes.",
        "precaution_4": "Seek professional guidance and support from healthcare providers, registered dietitians, exercise physiologists, or behavioral therapists for personalized weight management strategies, including dietary counseling, exercise prescription, and behavioral therapy."
    },
    "Obsessive Compulsive Disorder": {
        "precaution_1": "Seek professional evaluation and diagnosis of obsessive-compulsive disorder (OCD) by a mental health specialist, such as a psychiatrist, psychologist, or licensed therapist, for appropriate treatment planning.",
        "precaution_2": "Participate in cognitive-behavioral therapy (CBT) or exposure and response prevention (ERP) therapy to learn coping strategies, challenge irrational thoughts, and gradually confront feared situations or triggers to reduce OCD symptoms.",
        "precaution_3": "Consider medication management for OCD, such as selective serotonin reuptake inhibitors (SSRIs), serotonin-norepinephrine reuptake inhibitors (SNRIs), or other psychiatric medications, under the guidance of healthcare providers.",
        "precaution_4": "Involve family members or caregivers in treatment planning and support, and educate them about OCD, its symptoms, and effective strategies for providing encouragement, reassurance, and assistance."
    },
    "Oral Cancer": {
        "precaution_1": "Avoid tobacco use, including smoking and chewing tobacco, and limit alcohol consumption to reduce the risk of oral cancer, as these are significant risk factors for the disease.",
        "precaution_2": "Practice good oral hygiene by brushing teeth regularly, flossing daily, and attending regular dental check-ups to detect any abnormalities or precancerous lesions in the mouth.",
        "precaution_3": "Protect the lips and skin from excessive sun exposure by wearing sunscreen, protective clothing, and hats, and avoiding prolonged sun exposure, which can increase the risk of lip cancer and other skin cancers.",
        "precaution_4": "Seek prompt medical attention if noticing any signs or symptoms of oral cancer, such as persistent mouth sores, white or red patches, unusual lumps or thickening, or difficulty chewing, swallowing, or speaking."
    },
    "Orbital Dermoid": {
        "precaution_1": "Seek medical evaluation and diagnosis of orbital dermoid cysts or tumors by an ophthalmologist or oculoplastic surgeon, especially if experiencing symptoms such as eyelid swelling, proptosis, or visual disturbances.",
        "precaution_2": "Undergo imaging studies, such as CT scans or MRI scans, to assess the size, location, and characteristics of orbital dermoid lesions and determine appropriate treatment options.",
        "precaution_3": "Consider surgical removal of orbital dermoid cysts or tumors, especially for symptomatic or cosmetically concerning lesions, under the care of experienced surgeons skilled in orbital and oculoplastic procedures.",
        "precaution_4": "Follow postoperative care instructions provided by healthcare providers, including wound care, activity restrictions, and follow-up appointments, to optimize recovery and minimize complications after orbital dermoid surgery."
    },
    "Osteoarthritis": {
        "precaution_1": "Maintain a healthy weight and adopt lifestyle modifications, such as regular physical activity, balanced nutrition, and joint protection techniques, to manage symptoms and prevent progression of osteoarthritis.",
        "precaution_2": "Engage in low-impact exercises or activities, such as walking, swimming, cycling, or tai chi, to improve joint flexibility, strength, and function without exacerbating pain or causing further damage.",
        "precaution_3": "Use assistive devices, adaptive equipment, or orthotic supports to relieve joint stress, improve mobility, and reduce pain during daily activities and movements affected by osteoarthritis.",
        "precaution_4": "Follow prescribed treatment plan for osteoarthritis, which may include medications, physical therapy, injections, complementary therapies, or surgical interventions, under the guidance of healthcare providers."
    },
    "Osteomyelitis": {
        "precaution_1": "Seek prompt medical attention if suspecting osteomyelitis, especially if experiencing symptoms such as severe pain, swelling, redness, warmth, or limited mobility in the affected area, especially after injury or surgery.",
        "precaution_2": "Undergo diagnostic testing, such as blood tests, imaging studies (X-rays, MRI, CT scans), or bone biopsies, to confirm the diagnosis of osteomyelitis and identify the underlying cause and extent of infection.",
        "precaution_3": "Receive appropriate antibiotic therapy for osteomyelitis, tailored to the specific infecting organism and susceptibility patterns, under the guidance of infectious disease specialists or healthcare providers.",
        "precaution_4": "Undergo surgical intervention, such as debridement, drainage, or bone resection, as part of treatment for osteomyelitis, especially for severe or chronic infections that do not respond to antibiotics alone."
    },
    "Osteoporosis": {
        "precaution_1": "Adopt lifestyle modifications to support bone health, such as regular weight-bearing exercises, balanced nutrition with adequate calcium and vitamin D intake, and smoking cessation to reduce the risk of osteoporosis.",
        "precaution_2": "Participate in bone density screening and assessment, especially for individuals at risk for osteoporosis due to advanced age, menopause, low body weight, family history, or medical conditions.",
        "precaution_3": "Follow prescribed treatment plan for osteoporosis, which may include medications, calcium and vitamin D supplements, fall prevention strategies, and lifestyle modifications, under the guidance of healthcare providers.",
        "precaution_4": "Prevent falls and fractures by ensuring a safe home environment with adequate lighting, handrails, non-slip surfaces, and assistive devices, and practicing balance exercises and fall prevention techniques to reduce the risk of injury."
    },
    "Paratyphoid fever": {
        "precaution_1": "Practice good hand hygiene, including frequent handwashing with soap and water, especially before handling food, eating, or preparing meals, to reduce the risk of paratyphoid fever transmission.",
        "precaution_2": "Follow food safety guidelines and regulations for handling, cooking, and storing food to minimize the risk of contamination with Salmonella typhi and Salmonella paratyphi bacteria, which cause paratyphoid fever.",
        "precaution_3": "Avoid consumption of untreated or contaminated water, ice, or beverages, and choose safe drinking water sources, such as bottled or boiled water, to prevent waterborne transmission of paratyphoid fever.",
        "precaution_4": "Seek medical attention if experiencing symptoms of paratyphoid fever, such as fever, abdominal pain, nausea, vomiting, diarrhea, or headache, especially after traveling to areas with known outbreaks or endemic transmission."
    },
    "Parkinson's Disease": {
        "precaution_1": "Follow prescribed treatment plan for Parkinson's disease, which may include medications, physical therapy, occupational therapy, speech therapy, and lifestyle modifications, under the guidance of healthcare providers.",
        "precaution_2": "Stay physically active with regular exercise, such as walking, cycling, swimming, or dancing, to improve mobility, flexibility, balance, and overall well-being in Parkinson's disease.",
        "precaution_3": "Adopt strategies to manage motor symptoms and complications of Parkinson's disease, such as freezing of gait, tremors, rigidity, and postural instability, including cueing techniques, assistive devices, and environmental modifications.",
        "precaution_4": "Participate in support groups, counseling, or therapy to cope with the emotional and psychological challenges of living with Parkinson's disease and to connect with others facing similar experiences."
    },
    "Pelvic inflammatory disease": {
        "precaution_1": "Practice safe sex behaviors, such as consistent and correct use of condoms, limiting sexual partners, and avoiding high-risk sexual activities, to reduce the risk of sexually transmitted infections (STIs) that can lead to pelvic inflammatory disease (PID).",
        "precaution_2": "Seek prompt medical attention for symptoms of pelvic inflammatory disease, such as lower abdominal pain, abnormal vaginal discharge, painful urination, or irregular menstrual bleeding, and undergo diagnostic testing and treatment.",
        "precaution_3": "Complete the full course of antibiotics as prescribed by healthcare providers for treatment of pelvic inflammatory disease, even if symptoms improve, to ensure eradication of the infection and prevent complications or recurrence.",
        "precaution_4": "Undergo screening and testing for STIs, such as chlamydia and gonorrhea, especially for sexually active individuals or those at high risk for infection, and encourage partners to seek testing and treatment to prevent transmission and reinfection."
    },
    "Perennial Allergic Conjunctivitis": {
        "precaution_1": "Identify and avoid allergens or triggers that may exacerbate allergic conjunctivitis symptoms, such as pollen, dust mites, pet dander, mold, or environmental irritants, and take preventive measures to reduce exposure.",
        "precaution_2": "Practice good eye hygiene, including washing hands frequently, avoiding touching or rubbing the eyes, and using cool compresses or artificial tears to soothe irritation and reduce inflammation of the conjunctiva.",
        "precaution_3": "Use prescribed medications for allergic conjunctivitis, such as antihistamine eye drops, mast cell stabilizers, or corticosteroids, as directed by healthcare providers, to alleviate symptoms and improve eye comfort.",
        "precaution_4": "Consult with an allergist, ophthalmologist, or optometrist for personalized evaluation and management of perennial allergic conjunctivitis, especially if experiencing persistent or severe symptoms that do not respond to standard treatments."
    },
    "Pericarditis": {
        "precaution_1": "Seek medical attention if experiencing symptoms of pericarditis, such as chest pain, palpitations, shortness of breath, fatigue, or fever, especially if the pain is severe, persistent, or associated with other concerning symptoms.",
        "precaution_2": "Follow prescribed treatment plan for pericarditis, which may include medications (such as NSAIDs, colchicine, or corticosteroids), rest, fluid management, and monitoring for complications, under the guidance of healthcare providers.",
        "precaution_3": "Avoid strenuous physical activities, heavy lifting, or exercises that may exacerbate chest pain or discomfort during acute episodes of pericarditis, and gradually resume normal activities as advised by healthcare providers.",
        "precaution_4": "Monitor for signs of pericarditis recurrence, complications (such as cardiac tamponade or constrictive pericarditis), or other heart problems, and seek prompt medical attention for any new or worsening symptoms or concerns."
    },
    "Peritonitis": {
        "precaution_1": "Seek immediate medical attention if suspecting peritonitis, especially if experiencing symptoms such as severe abdominal pain, tenderness, rigidity, fever, nausea, vomiting, or changes in bowel habits.",
        "precaution_2": "Undergo diagnostic testing, such as physical examination, blood tests, imaging studies (X-rays, ultrasound, CT scans), or peritoneal fluid analysis, to confirm the diagnosis of peritonitis and identify the underlying cause and extent of infection.",
        "precaution_3": "Receive prompt antibiotic therapy and supportive care for peritonitis, tailored to the specific infecting organism and susceptibility patterns, under the guidance of infectious disease specialists or healthcare providers.",
        "precaution_4": "Undergo surgical intervention, such as exploratory laparotomy or laparoscopy, as part of treatment for peritonitis, especially for severe or complicated cases that do not respond to antibiotics alone."
    },
    "Pinguecula": {
        "precaution_1": "Protect the eyes from excessive sun exposure by wearing sunglasses with UV protection, wide-brimmed hats, and using artificial tears or lubricating eye drops to reduce irritation and inflammation of the pinguecula.",
        "precaution_2": "Practice good eye hygiene, including washing hands frequently, avoiding touching or rubbing the eyes, and using cool compresses or artificial tears to soothe discomfort and reduce redness of the conjunctiva.",
        "precaution_3": "Use prescribed medications or treatments for pinguecula, such as corticosteroid eye drops, non-steroidal anti-inflammatory drugs (NSAIDs), or surgical removal, as recommended by ophthalmologists or healthcare providers.",
        "precaution_4": "Consult with an ophthalmologist or optometrist for personalized evaluation and management of pinguecula, especially if experiencing persistent or bothersome symptoms, such as pain, irritation, or vision changes."
    },
    "Pneumonia": {
        "precaution_1": "Get vaccinated against common causes of pneumonia, such as the pneumococcal vaccine and the flu vaccine.",
        "precaution_2": "Practice good hand hygiene to prevent the spread of respiratory infections.",
        "precaution_3": "Avoid close contact with individuals who have respiratory infections.",
        "precaution_4": "Seek prompt medical attention if experiencing symptoms of pneumonia, such as cough, fever, chest pain, and difficulty breathing."
    },
      "Poliomyelitis": {
        "precaution_1": "Get vaccinated against polio as per recommended schedules.",
        "precaution_2": "Practice good hygiene, including washing hands frequently with soap and water.",
        "precaution_3": "Avoid contact with individuals who have polio.",
        "precaution_4": "Support polio eradication efforts through vaccination campaigns and public health initiatives."
    },
      "Polycystic ovary syndrome (PCOS)": {
        "precaution_1": "Maintain a healthy lifestyle with regular exercise and balanced nutrition.",
        "precaution_2": "Manage weight to reduce the risk of insulin resistance and hormone imbalances associated with PCOS.",
        "precaution_3": "Monitor and manage symptoms of PCOS, such as irregular periods, acne, excess hair growth, and fertility issues, with the guidance of healthcare providers.",
        "precaution_4": "Consider hormonal contraceptives or medications to regulate menstrual cycles and manage symptoms of PCOS."
    },
      "Porphyria": {
        "precaution_1": "Avoid triggers that can induce porphyria attacks, such as certain medications, alcohol, fasting, and exposure to sunlight.",
        "precaution_2": "Stay well-hydrated and maintain balanced nutrition to support overall health and reduce the risk of porphyria symptoms.",
        "precaution_3": "Work closely with healthcare providers to manage porphyria symptoms and complications, and follow recommended treatment and monitoring plans.",
        "precaution_4": "Educate family members, caregivers, and healthcare professionals about porphyria and its management to ensure appropriate support and care."
    },
      "Post Menopausal Bleeding": {
        "precaution_1": "Seek prompt medical evaluation for postmenopausal bleeding, as it can be a sign of underlying health conditions, such as endometrial cancer or hormonal imbalances.",
        "precaution_2": "Undergo diagnostic tests, such as transvaginal ultrasound, endometrial biopsy, or hysteroscopy, to evaluate the cause of postmenopausal bleeding and guide appropriate treatment.",
        "precaution_3": "Follow recommended treatment options for postmenopausal bleeding, which may include hormone therapy, surgery, or other interventions to address underlying causes and alleviate symptoms.",
        "precaution_4": "Maintain regular gynecological check-ups and screenings to monitor reproductive health and detect any abnormalities or changes in postmenopausal bleeding patterns."
    },
      "Post-herpetic neuralgia": {
        "precaution_1": "Seek medical evaluation and treatment for post-herpetic neuralgia to manage pain and prevent complications.",
        "precaution_2": "Consider antiviral medications, such as acyclovir, valacyclovir, or famciclovir, during the acute phase of herpes zoster infection to reduce the risk of post-herpetic neuralgia.",
        "precaution_3": "Explore pain management strategies for post-herpetic neuralgia, such as topical treatments, oral medications, nerve blocks, physical therapy, or complementary therapies, under the guidance of healthcare providers.",
        "precaution_4": "Educate family members, caregivers, and healthcare professionals about post-herpetic neuralgia and its impact on daily functioning, emotional well-being, and quality of life."
    },
      "Postpartum depression/ Perinatal depression": {
        "precaution_1": "Seek professional evaluation and support for postpartum depression or perinatal depression from mental health specialists, such as psychiatrists, psychologists, or therapists, to develop a personalized treatment plan.",
        "precaution_2": "Participate in psychotherapy, counseling, or support groups for postpartum depression or perinatal depression to learn coping skills, address underlying issues, and receive emotional support from peers and professionals.",
        "precaution_3": "Consider medication management for postpartum depression or perinatal depression, such as antidepressants or mood stabilizers, under the guidance of healthcare providers, to alleviate symptoms and improve mood and functioning.",
        "precaution_4": "Involve partners, family members, and caregivers in postpartum depression or perinatal depression treatment and support, and communicate openly about feelings, needs, and challenges to foster understanding, empathy, and collaboration."
    },
      "Preeclampsia": {
        "precaution_1": "Attend regular prenatal care visits and screenings to monitor blood pressure, urine protein levels, and other indicators of preeclampsia risk during pregnancy.",
        "precaution_2": "Adopt a healthy lifestyle with balanced nutrition, regular exercise, stress management, and adequate rest to support maternal and fetal health and reduce the risk of preeclampsia.",
        "precaution_3": "Seek prompt medical attention if experiencing symptoms of preeclampsia, such as high blood pressure, proteinuria, swelling, headache, visual changes, or abdominal pain, especially during the third trimester of pregnancy.",
        "precaution_4": "Follow recommended treatment and management strategies for preeclampsia, which may include medications, bed rest, dietary modifications, or hospitalization for close monitoring and supportive care, under the guidance of healthcare providers."
    },
      "Premenstrual syndrome": {
        "precaution_1": "Track menstrual cycles and premenstrual symptoms to identify patterns, triggers, and variations in premenstrual syndrome (PMS) symptoms over time.",
        "precaution_2": "Adopt healthy lifestyle habits, such as regular exercise, balanced nutrition, stress reduction, and adequate sleep, to manage PMS symptoms and support overall well-being throughout the menstrual cycle.",
        "precaution_3": "Consider dietary modifications, herbal supplements, or over-the-counter medications to alleviate specific PMS symptoms, such as bloating, breast tenderness, mood swings, irritability, or fatigue, under the guidance of healthcare providers.",
        "precaution_4": "Discuss treatment options for severe or persistent PMS symptoms with healthcare providers, including hormonal contraceptives, antidepressants, or other medications, to address underlying hormonal imbalances or mood disorders."
    },
      "Presbyopia": {
        "precaution_1": "Undergo regular eye exams and vision screenings to monitor changes in vision, detect presbyopia, and update corrective lens prescriptions as needed.",
        "precaution_2": "Consider corrective eyewear options for presbyopia, such as reading glasses, bifocals, multifocal lenses, or contact lenses, to improve near vision and reading ability.",
        "precaution_3": "Discuss surgical options for presbyopia correction, such as monovision LASIK, presbyLASIK, or refractive lens exchange, with ophthalmologists or refractive surgeons, to reduce dependence on reading glasses or bifocals.",
        "precaution_4": "Implement lifestyle modifications and environmental adjustments to optimize visual comfort and functionality with presbyopia, such as adequate lighting, magnification aids, font enlargement, or digital device settings."
    },
      "Preterm birth": {
        "precaution_1": "Attend regular prenatal care visits and screenings to monitor fetal development, gestational age, and risk factors for preterm birth, such as multiple pregnancies, maternal age, and medical conditions.",
        "precaution_2": "Adopt healthy lifestyle habits during pregnancy, such as balanced nutrition, regular exercise, stress management, and avoiding tobacco, alcohol, and illicit drugs, to reduce the risk of preterm birth and promote maternal and fetal health.",
        "precaution_3": "Seek prompt medical attention for any signs or symptoms of preterm labor, such as contractions, vaginal bleeding, pelvic pressure, or fluid leakage, and follow healthcare provider recommendations for evaluation and management.",
        "precaution_4": "Discuss preventive interventions for preterm birth, such as progesterone supplements, cervical cerclage, or lifestyle modifications, with healthcare providers, especially for women at high risk due to previous preterm births or other factors."
    },
      "Progeria": {
        "precaution_1": "Seek genetic counseling and testing for progeria to understand the underlying cause, inheritance pattern, and family implications of the condition.",
        "precaution_2": "Participate in supportive care and management strategies for progeria, including regular medical check-ups, specialized treatments, physical therapy, and psychological support, under the guidance of healthcare providers.",
        "precaution_3": "Explore clinical trial participation, research initiatives, and advocacy organizations for progeria to access novel therapies, experimental treatments, and community resources.",
        "precaution_4": "Educate family members, caregivers, educators, and healthcare professionals about progeria and its impact on growth, development, health, and quality of life to facilitate informed decision-making, planning, and support."
    },
      "Psoriasis": {
        "precaution_1": "Follow prescribed treatment plan for psoriasis, which may include topical medications, phototherapy, oral medications, biologic agents, or combination therapies, under the guidance of dermatologists or healthcare providers.",
        "precaution_2": "Practice good skin care and hygiene to manage psoriasis symptoms and reduce the risk of flare-ups, such as gentle cleansing, moisturizing, avoiding harsh chemicals or irritants, and protecting skin from trauma or injury.",
        "precaution_3": "Adopt a healthy lifestyle with balanced nutrition, regular exercise, stress management, and adequate rest to support overall well-being and immune function, which may help improve psoriasis symptoms and response to treatment.",
        "precaution_4": "Seek emotional and psychological support for coping with the challenges of living with psoriasis, such as stress, self-esteem issues, social stigma, and impact on quality of life, through counseling, support groups, or therapy."
    },
      "Puerperal sepsis": {
        "precaution_1": "Practice good hygiene and infection control measures during pregnancy, childbirth, and postpartum care to reduce the risk of puerperal sepsis, such as handwashing, sterile techniques, and proper wound care.",
        "precaution_2": "Seek prompt medical attention for any signs or symptoms of infection after childbirth, such as fever, abdominal pain, foul-smelling discharge, or wound redness, swelling, or drainage, and follow healthcare provider recommendations for evaluation and treatment.",
        "precaution_3": "Receive appropriate prenatal care, intrapartum care, and postpartum follow-up to monitor maternal health, identify potential risk factors or complications, and prevent or manage puerperal sepsis and other postpartum infections.",
        "precaution_4": "Educate healthcare providers, birth attendants, and family members about the signs, symptoms, and risk factors for puerperal sepsis and the importance of early recognition, diagnosis, and treatment to prevent serious complications and maternal mortality."
    },
    "Pulmonary embolism": {
    "precaution_1": "Understand the risk factors, signs, and symptoms of pulmonary embolism, such as chest pain, shortness of breath, rapid heart rate, cough, and leg swelling, to facilitate early recognition and prompt medical attention.",
    "precaution_2": "Seek emergency medical care for suspected pulmonary embolism or acute respiratory distress, and undergo diagnostic testing, such as CT angiography or ventilation-perfusion scanning, to confirm the diagnosis and guide appropriate treatment.",
    "precaution_3": "Follow prescribed treatment plan for pulmonary embolism, which may include anticoagulant medications, thrombolytic therapy, oxygen therapy, or surgical interventions, under the guidance of healthcare providers.",
    "precaution_4": "Take preventive measures to reduce the risk of recurrent pulmonary embolism, such as long-term anticoagulation therapy, compression stockings, lifestyle modifications, and regular follow-up with healthcare providers for monitoring and management."
    },
    "Ques fever": {
    "precaution_1": "Avoid exposure to ticks and tick-infested areas, especially during outdoor activities in endemic regions for Q fever, such as farming, gardening, hiking, or camping, to reduce the risk of infection.",
    "precaution_2": "Use personal protective measures, such as wearing long sleeves, pants, closed shoes, and insect repellents containing DEET or permethrin, to prevent tick bites and minimize contact with potentially infected animals or environments.",
    "precaution_3": "Practice proper food safety and hygiene when handling and consuming unpasteurized dairy products, raw meats, and other potentially contaminated foods to prevent transmission of Coxiella burnetii bacteria, which cause Q fever.",
    "precaution_4": "Seek medical attention if experiencing symptoms of Q fever, such as high fever, chills, fatigue, headache, muscle aches, cough, chest pain, or rash, especially after exposure to ticks or livestock, and inform healthcare providers about potential risk factors for accurate diagnosis and treatment."
    },
    "Quinsy": {
    "precaution_1": "Maintain good oral hygiene.",
    "precaution_2": "Avoid smoking and alcohol.",
    "precaution_3": "Take prescribed antibiotics as directed.",
    "precaution_4": "Seek medical attention if symptoms worsen or persist."
    },
    "Rabies": {
    "precaution_1": "Avoid contact with animals, especially wild animals.",
    "precaution_2": "Seek medical attention promptly if exposed to an animal that may have rabies.",
    "precaution_3": "Get vaccinated if exposed to rabies.",
    "precaution_4": "Ensure pets are vaccinated against rabies."
    },
    "Raynaud's Phenomenon": {
    "precaution_1": "Avoid exposure to cold temperatures.",
    "precaution_2": "Wear warm clothing in cold weather.",
    "precaution_3": "Avoid smoking and caffeine.",
    "precaution_4": "Exercise regularly to improve circulation."
    },
    "Repetitive strain injury": {
    "precaution_1": "Take regular breaks during repetitive tasks.",
    "precaution_2": "Maintain proper posture and ergonomics.",
    "precaution_3": "Stretch and exercise regularly.",
    "precaution_4": "Seek medical attention if experiencing pain or discomfort."
    },
    "Rheumatic fever": {
    "precaution_1": "Take prescribed antibiotics as directed.",
    "precaution_2": "Get plenty of rest.",
    "precaution_3": "Maintain a healthy diet.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Rheumatism": {
    "precaution_1": "Maintain a healthy diet.",
    "precaution_2": "Exercise regularly.",
    "precaution_3": "Avoid exposure to cold temperatures.",
    "precaution_4": "Seek medical attention if experiencing pain or discomfort."
    },
    "Rickets": {
    "precaution_1": "Ensure adequate intake of vitamin D and calcium.",
    "precaution_2": "Spend time outside in sunlight.",
    "precaution_3": "Maintain a healthy diet.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Rift Valley fever": {
    "precaution_1": "Avoid contact with infected animals.",
    "precaution_2": "Use insect repellent and wear protective clothing to prevent mosquito bites.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid consumption of raw or undercooked meat or milk."
    },
    "Rocky Mountain spotted fever": {
    "precaution_1": "Use insect repellent and wear protective clothing to prevent tick bites.",
    "precaution_2": "Promptly remove any attached ticks.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid wooded and bushy areas."
    },
    "Rubella": {
    "precaution_1": "Get vaccinated against rubella.",
    "precaution_2": "Avoid contact with infected individuals.",
    "precaution_3": "Seek medical attention if exposed to rubella.",
    "precaution_4": "Practice good hygiene to prevent spread."
    },
    "SARS": {
    "precaution_1": "Avoid contact with infected individuals.",
    "precaution_2": "Practice good hygiene, including hand washing.",
    "precaution_3": "Wear a mask in crowded areas.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "SIDS": {
    "precaution_1": "Place infants on their backs to sleep.",
    "precaution_2": "Avoid soft bedding and loose objects in the crib.",
    "precaution_3": "Maintain a smoke-free environment.",
    "precaution_4": "Breastfeed if possible."
    },
    "Sarcoidosis": {
    "precaution_1": "Avoid exposure to environmental pollutants.",
    "precaution_2": "Maintain a healthy diet.",
    "precaution_3": "Exercise regularly.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Sarcoma": {
    "precaution_1": "Avoid exposure to radiation and chemicals.",
    "precaution_2": "Maintain a healthy diet.",
    "precaution_3": "Exercise regularly.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Scabies": {
    "precaution_1": "Avoid close contact with infected individuals.",
    "precaution_2": "Wash bedding and clothing in hot water.",
    "precaution_3": "Apply prescribed topical medication.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Scarlet fever": {
    "precaution_1": "Avoid close contact with infected individuals.",
    "precaution_2": "Practice good hygiene, including hand washing.",
    "precaution_3": "Take prescribed antibiotics as directed.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Schizophrenia": {
    "precaution_1": "Seek medical attention if experiencing symptoms.",
    "precaution_2": "Maintain a healthy lifestyle, including regular exercise and a balanced diet.",
    "precaution_3": "Avoid drugs and alcohol.",
    "precaution_4": "Seek support from family and friends."
    },
    "Sciatica": {
    "precaution_1": "Maintain good posture.",
    "precaution_2": "Exercise regularly, including stretching and strengthening exercises.",
    "precaution_3": "Use cold or heat therapy as directed.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Scrapie": {
    "precaution_1": "Avoid contact with infected animals.",
    "precaution_2": "Practice good hygiene, including hand washing.",
    "precaution_3": "Dispose of animal carcasses properly.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Scrub Typhus": {
    "precaution_1": "Use insect repellent and wear protective clothing to prevent chigger bites.",
    "precaution_2": "Promptly remove any attached chiggers.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid wooded and bushy areas."
    },
    "Scurvy": {
    "precaution_1": "Ensure adequate intake of vitamin C.",
    "precaution_2": "Eat a balanced diet, including fruits and vegetables.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid prolonged periods without fresh fruits and vegetables."
    },
    "Sepsis": {
    "precaution_1": "Practice good hygiene, including hand washing.",
    "precaution_2": "Seek medical attention promptly for infections.",
    "precaution_3": "Follow medical advice for managing chronic conditions.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Sexually transmitted infections (STIs)": {
    "precaution_1": "Practice safe sex.",
    "precaution_2": "Get tested regularly for STIs.",
    "precaution_3": "Limit the number of sexual partners.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Shaken Baby Syndrome": {
    "precaution_1": "Avoid shaking or rough handling of infants.",
    "precaution_2": "Seek medical attention promptly if infant experiences symptoms.",
    "precaution_3": "Provide a safe and secure environment for infants.",
    "precaution_4": "Seek support if feeling stressed or overwhelmed."
    },
    "Shigellosis": {
    "precaution_1": "Practice good hygiene, including hand washing.",
    "precaution_2": "Avoid contaminated food and water.",
    "precaution_3": "Cook food thoroughly.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Shin splints": {
    "precaution_1": "Wear supportive shoes.",
    "precaution_2": "Gradually increase exercise intensity and duration.",
    "precaution_3": "Use ice and rest to relieve pain.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Shingles": {
    "precaution_1": "Get vaccinated against shingles.",
    "precaution_2": "Avoid contact with individuals who have not had chickenpox or the vaccine.",
    "precaution_3": "Take prescribed antiviral medication as directed.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Sickle-cell anemia": {
    "precaution_1": "Manage pain with prescribed medications.",
    "precaution_2": "Stay hydrated.",
    "precaution_3": "Avoid extreme temperatures.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Smallpox": {
    "precaution_1": "Get vaccinated against smallpox if at risk.",
    "precaution_2": "Avoid contact with infected individuals.",
    "precaution_3": "Practice good hygiene, including hand washing.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Stevens-Johnson syndrome": {
    "precaution_1": "Avoid medications that may cause Stevens-Johnson syndrome.",
    "precaution_2": "Seek medical attention promptly if experiencing symptoms.",
    "precaution_3": "Inform healthcare providers of medication allergies.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Stomach ulcers": {
    "precaution_1": "Avoid spicy and fatty foods.",
    "precaution_2": "Avoid alcohol and tobacco.",
    "precaution_3": "Take prescribed medications as directed.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Strep throat": {
    "precaution_1": "Practice good hygiene, including hand washing.",
    "precaution_2": "Avoid close contact with infected individuals.",
    "precaution_3": "Take prescribed antibiotics as directed.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Stroke": {
    "precaution_1": "Maintain a healthy lifestyle, including regular exercise and a balanced diet.",
    "precaution_2": "Control chronic conditions, such as hypertension and diabetes.",
    "precaution_3": "Seek medical attention promptly if experiencing symptoms.",
    "precaution_4": "Quit smoking and limit alcohol consumption."
    },
    "Sub-conjunctival Haemorrhage": {
    "precaution_1": "Avoid rubbing or touching the eye.",
    "precaution_2": "Use artificial tears to relieve dryness.",
    "precaution_3": "Seek medical attention if experiencing vision changes or pain.",
    "precaution_4": "Avoid strenuous activity or heavy lifting."
    },
    "Syphilis": {
    "precaution_1": "Practice safe sex.",
    "precaution_2": "Get tested regularly for STIs.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Take prescribed antibiotics as directed."
    },
    "Taeniasis": {
    "precaution_1": "Cook meat thoroughly.",
    "precaution_2": "Wash hands and surfaces that come into contact with raw meat.",
    "precaution_3": "Avoid eating undercooked pork or beef.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Taeniasis/cysticercosis": {
    "precaution_1": "Cook meat thoroughly.",
    "precaution_2": "Wash hands and surfaces that come into contact with raw meat.",
    "precaution_3": "Avoid eating undercooked pork or beef.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Tay-Sachs disease": {
    "precaution_1": "Get genetic counseling before having children if at risk.",
    "precaution_2": "Seek medical attention if experiencing symptoms.",
    "precaution_3": "Participate in newborn screening programs.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Tennis elbow": {
    "precaution_1": "Rest and ice the affected area.",
    "precaution_2": "Stretch and strengthen the forearm muscles.",
    "precaution_3": "Use proper equipment and technique during physical activity.",
    "precaution_4": "Seek medical attention if symptoms persist."
    },
    "Tetanus": {
    "precaution_1": "Get vaccinated against tetanus.",
    "precaution_2": "Clean wounds thoroughly.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid contact with contaminated soil or objects."
    },
    "Thalassaemia": {
    "precaution_1": "Get genetic counseling before having children if at risk.",
    "precaution_2": "Seek medical attention if experiencing symptoms.",
    "precaution_3": "Participate in newborn screening programs.",
    "precaution_4": "Manage chronic conditions as directed by a healthcare provider."
    },
    "Tinnitus": {
    "precaution_1": "Avoid loud noises.",
    "precaution_2": "Manage stress and anxiety.",
    "precaution_3": "Seek medical attention if experiencing symptoms.",
    "precaution_4": "Avoid caffeine and nicotine."
    },
    "Tonsillitis": {
    "precaution_1": "Practice good hygiene, including hand washing.",
    "precaution_2": "Avoid close contact with infected individuals.",
    "precaution_3": "Take prescribed antibiotics as directed.",
    "precaution_4": "Seek medical attention if experiencing symptoms."
    },
    "Toxic shock syndrome": {
    "precaution_1": "Use tampons with caution and change them frequently.",
    "precaution_2": "Practice good hygiene, including hand washing.",
    "precaution_3": "Seek medical attention promptly if experiencing symptoms.",
    "precaution_4": "Avoid using tampons if experiencing a vaginal infection."
    },
    "Trachoma": {
    "precaution_1": "Practice good hygiene, including washing your face with soap and water regularly.",
    "precaution_2": "Avoid sharing towels and washcloths with others.",
    "precaution_3": "Seek medical attention if you experience symptoms such as redness, itching, or discharge in the eyes.",
    "precaution_4": "Keep your environment clean to prevent the spread of infection."
    },
    "Trichinosis": {
    "precaution_1": "Cook all meats thoroughly, especially pork, wild game, and bear meat.",
    "precaution_2": "Avoid eating raw or undercooked meat.",
    "precaution_3": "Freeze meat at -15 degrees Celsius for at least 20 days to kill the parasite.",
    "precaution_4": "Practice good hygiene, including washing your hands and surfaces that come into contact with raw meat."
    },
    "Trichomoniasis": {
    "precaution_1": "Practice safe sex, including using condoms.",
    "precaution_2": "Get tested and treated for sexually transmitted infections regularly.",
    "precaution_3": "Limit the number of sexual partners.",
    "precaution_4": "Inform your sexual partners if you have been diagnosed with trichomoniasis."
    },
    "Tuberculosis": {
    "precaution_1": "Cover your mouth and nose when coughing or sneezing.",
    "precaution_2": "Avoid close contact with people who have TB.",
    "precaution_3": "Wear a mask if you have TB and are in close contact with others.",
    "precaution_4": "Complete the full course of TB medication as prescribed by your healthcare provider."
    },
    "Tularemia": {
    "precaution_1": "Avoid contact with animals that may carry the bacteria.",
    "precaution_2": "Use insect repellent and wear protective clothing to prevent insect bites.",
    "precaution_3": "Cook wild game thoroughly before consumption.",
    "precaution_4": "Seek medical attention if you suspect exposure to tularemia."
    },
    "Turners Syndrome": {
    "precaution_1": "Regular medical check-ups for associated health conditions.",
    "precaution_2": "Early intervention for developmental delays.",
    "precaution_3": "Hormone replacement therapy as recommended by healthcare providers.",
    "precaution_4": "Genetic counseling for family planning and understanding the condition."
    },
    "Urticaria": {
    "precaution_1": "Identify and avoid triggers that cause hives.",
    "precaution_2": "Take prescribed antihistamines or medications.",
    "precaution_3": "Apply cool compresses to relieve itching and swelling.",
    "precaution_4": "Consult with an allergist or dermatologist for management strategies."
    },
    "Varicose Veins": {
    "precaution_1": "Maintain a healthy weight and exercise regularly.",
    "precaution_2": "Elevate your legs when resting to improve circulation.",
    "precaution_3": "Avoid prolonged standing or sitting.",
    "precaution_4": "Wear compression stockings as recommended by healthcare providers."
    },
    "Vasovagal syncope": {
    "precaution_1": "Stay hydrated and maintain adequate fluid intake.",
    "precaution_2": "Avoid triggers that may lead to fainting episodes.",
    "precaution_3": "Lie down or sit with your legs elevated if feeling faint.",
    "precaution_4": "Practice stress-reducing techniques and relaxation methods."
    },
    "Vitamin B12 Deficiency": {
    "precaution_1": "Consume foods rich in vitamin B12, such as meat, fish, and dairy products.",
    "precaution_2": "Consider vitamin B12 supplements if deficient.",
    "precaution_3": "Follow a balanced diet to ensure adequate nutrient intake.",
    "precaution_4": "Consult with a healthcare provider for proper diagnosis and treatment."
    },
    "Vitiligo": {
    "precaution_1": "Protect skin from sun exposure with sunscreen and clothing.",
    "precaution_2": "Use cosmetics or camouflage creams to cover depigmented areas.",
    "precaution_3": "Consult with a dermatologist for treatment options.",
    "precaution_4": "Manage stress levels, as stress can exacerbate symptoms."
    },
    "Warkany syndrome": {
    "precaution_1": "Regular medical evaluations and screenings for associated health issues.",
    "precaution_2": "Early intervention for developmental delays and learning difficulties.",
    "precaution_3": "Genetic counseling for family planning and understanding the condition.",
    "precaution_4": "Collaborate with a multidisciplinary healthcare team for comprehensive care."
    },
    "Warts": {
    "precaution_1": "Avoid direct contact with warts to prevent spread.",
    "precaution_2": "Keep the affected area clean and dry.",
    "precaution_3": "Do not pick or scratch warts to prevent further spread.",
    "precaution_4": "Consider over-the-counter treatments or consult a healthcare provider for removal."
    },
    "Yaws": {
    "precaution_1": "Practice good hygiene, including regular bathing.",
    "precaution_2": "Avoid close contact with individuals with active yaws lesions.",
    "precaution_3": "Complete the full course of antibiotics as prescribed.",
    "precaution_4": "Promote community-wide treatment programs to prevent transmission."
    },
    "Yellow Fever": {
    "precaution_1": "Get vaccinated against yellow fever before traveling to endemic areas.",
    "precaution_2": "Use insect repellent and wear protective clothing to prevent mosquito bites.",
    "precaution_3": "Seek medical attention if experiencing symptoms after travel to affected regions.",
    "precaution_4": "Follow public health guidelines for prevention and control of yellow fever."
    },
    "Zika virus disease": {
    "precaution_1": "Prevent mosquito bites by using repellent and wearing long sleeves and pants.",
    "precaution_2": "Practice safe sex to prevent sexual transmission of Zika virus.",
    "precaution_3": "Avoid travel to areas with ongoing Zika virus outbreaks, especially if pregnant.",
    "precaution_4": "Seek medical care if experiencing symptoms of Zika virus infection."
    },
    "Lactose Intolerance": {
    "precaution_1": "Limit or avoid dairy products containing lactose.",
    "precaution_2": "Choose lactose-free or reduced-lactose dairy products.",
    "precaution_3": "Take lactase enzyme supplements before consuming dairy products.",
    "precaution_4": "Consult a healthcare provider for dietary recommendations and management options."
    },
    "Papilloedema": {
    "precaution_1": "Seek immediate medical attention if experiencing symptoms such as headaches, vision changes, or nausea.",
    "precaution_2": "Follow the treatment plan prescribed by a healthcare provider, which may include medications or surgery.",
    "precaution_3": "Attend regular follow-up appointments with a healthcare provider to monitor the condition.",
    "precaution_4": "Avoid activities that may increase intracranial pressure, such as heavy lifting or straining."
    },
}



const precautions_json = {
    'precautions':[]
}

for (const precaution in precautions_list){


    const disease = precaution
    // console.log(disease);

    precautions_json.precautions.push({disease:disease, precautions:precautions_list[disease]})
}
// console.log(precautions_json);



// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
// Database name
const dbName = 'MultiClass-Disease';
// Collection name
const collectionName = 'Precautions';

async function insertPrecautions() {
    // Create a MongoDB client
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Access the symptoms collection
        const collection = db.collection(collectionName);

        // Insert the symptoms object into the collection
        const result = await collection.insertOne(precautions_json);
        console.log(`${result.insertedCount} precautions inserted successfully.`);
    } 
    catch (error) {
        console.error('Error inserting precautions:', error);
    } 
    finally {
        // Close the MongoDB client
        await client.close();
    }
}

insertPrecautions().catch(console.error);