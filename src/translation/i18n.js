import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                "translation": {
                    "donation": {
                        "link": "https://my.israelgives.org/en/fundme/Nirim"
                    },
                    "error": {
                        "title": "Opps! this page doesn't exist",
                        "text": "Oops! The page you are looking for does not exist. It might have been moved or deleted.",
                        "btn": "Return to home page"
                    },
                    "header": {
                        "nav1": "Home",
                        "nav2": "Donate",
                        "nav3": "Projects",
                        "nav4": "Contact"
                    },
                    "footer": {
                        "contact": {
                            "title": "Contact us:",
                            "phone": "Phone:",
                            "phoneNumber": "+972-52-482-7994",
                            "email": "Email:"
                        },
                        "links": {
                            "title": "Links",
                            "item1": "Nirim's website",

                        },
                        "subscribe": {
                            "title": "Subscribe to our newslatter",
                            "firstName": {
                                "ariaLabel": "First Name",
                                "placeholder": "First Name",
                                "required": "This field is required",
                                "min": "Name is too short",
                                "max": "Name is too long"
                            },
                            "lastName": {
                                "ariaLabel": "Last Name",
                                "placeholder": "Last Name",
                                "required": "This field is required",
                                "min": "Name is too short",
                                "max": "Name is too long"
                            },
                            "email": {
                                "ariaLabel": "Your email",
                                "placeholder": "Email",
                                "required": "Email is required",
                                "errorMsg": "Email is invalid",
                                "errorMsg1": "Email already exists",
                                "errorMsg2": "Sent successfully"
                            },
                            "number": {
                                "ariaLabel": "Phone Number",
                                "placeholder": "Phone Number",
                                "msg": "Phone nuber is invalid"
                            },
                            "checkBox": {
                                "ariaLabel": "Accept getting updates checkbox",
                                "label": "Accept getting updates"
                            },
                            "button": "Send"
                        }
                    },
                    "hero": {
                        "title": "About kibbutz Nirim",
                        "subtitle": "Kibbutz Nirim ",
                        "text": "Was first established on the eve of Yom Kippur in 1946 as part of David Ben Gurion's plan \"to settle the Negev with Jewish settlements and make the desert bloom\". Over the years, the kibbutz developed a vibrant community life and significant construction and development. Nirim's livelihood is based on its rich and varied field crops and plantations, dairy farm, and the organic farm, which is one of the largest and most prosperous in Israel. Despite living in a security-challenged area, the residents, pioneers in spirit, have dealt with the hardships of living on the border for years, all the while proudly farming the land “up to the border”.",
                        "src": "Https://www.youtube.com/embed/9fBMxYMt2vI",
                        "overlayText": "Kibbutz Nirim"
                    },
                    "afterOct": {
                        "sectionTitle": "THE MASSACRE on KIBBUTZ NIRIM",
                        "title": "On the morning of October 7",
                        "p": " Hamas terrorists entered the kibbutz, setting homes on fire, shooting at civilians, and throwing grenades. For hours, the kibbutz was under siege, as most of the residents did all they could to hunker down in their saferooms and protect their families . During the terror attack, five people were brutally murdered, and another five were kidnapped and taken to Gaza. At the time of writing, two of them are still being held captive, their fates unknown. 3 IDF soldiers, including the commander of the southern brigade, that arrived at the kibbutz in the early morning to defend our community were killed in the battle. Their bodies were kidnapped to Gaza as well . The physical destruction is immense: 30 houses were completely destroyed by fire, 45 buildings and public areas were severely damaged, many infrastructures were destroyed. Over 60% of the kibbutz's agricultural land was completely burned.",
                        "testiTitle": "Quotes:",
                        "testi1": {
                            "title": "Barak L.",
                            "p": "My husband had his weapon pointed at the door. At this point the alarms and the explosions in the background were the least of our problems. I said to myself: ‘If they come in and shoot I will be my children's shield, I will protect them with my body."
                        },
                        "testi2": {
                            "title": "Miriam M.",
                            "p": "I was alone in my house in the safe room, trying to understand what was going on, all the while thinking about my son.  He was at one of the parties in a wadi (dry riverbed) nearby. He managed to find bushes to hide in. Only after he was rescued, did he tell me that they had been hiding while the terrorists were in the fields around them on their motorcycles…"
                        },
                        "testi3": {
                            "title": "Yossi K.",
                            "p": "On Saturday morning I took my daughter's dog for a walk. We were on the way to the back gate to go out to the fields when the alarms started to go off. I ran to an old bomb shelter near the youth center and waited, but the alarms and the bombing didn’t let up. After about an hour I decided to run toward the houses and seek shelter in someone’s saferoom, but all the houses were locked and I couldn't get in…"
                        },
                        "testi4": {
                            "title": "Eldad H.",
                            "p": "My wife was reading the messages on the group text and we understood that we had to lock the safe room door, but the safe rooms have no locks. We heard noises in the house. I stood next to the door holding the handle, all this time praying that they don't come through the window because there is no lock on the window, either. Meanwhile my wife, with extraordinary resilience is calming my two year old son, holding him in one hand and in the other holding the phone, sending messages for help."
                        },
                        "testi5": {
                            "title": "",
                            "p": "Uriel, Amiee, Grandma Deborah, and the ten-day-old baby Kai were at the Labban-Tzarfati family home that Saturday morning. They had celebrated Kai's Brit Milah two days before."
                        },
                        "testi6": {
                            "title": "uriel",
                            "p": "We heard the terrorists breaking down the door of the house. We heard them from within the safe room speaking in Arabic, breaking and destroying the house. Then they tried to open the door of the saferoom. My wife and I held the handle with all our strength. At the same time, my mother-in-law was holding ten-day-old Kai in her hands, putting a finger in his mouth so he wouldn't cry, so they wouldn't hear him..."
                        },
                        "testi7": {
                            "title": "",
                            "p": "After a few minutes, the terrorists stopped trying to break through the door of the safe room and then we heard crackling sounds and started to smell the smoke. While we were fighting over the door handle, the frame apparently dislodged from the wall slightly and a little and a crack was created in the door, through which smoke began to flood the safe room. That was when we realized that they had set the house on fire."
                        },
                        "testi8": {
                            "title": "",
                            "p": "For six hours, my wife, my mother-in-law and I entered into a kind of \"game\". The smoke entered through the slot in the door of the safe room and every few minutes we carefully opened the protective metal window of the safe room, each in turn, brought ten-day-old Kai as near the opening of the window as w e dared, and breathed in a little air Every time we saw a terrorist near the window or heard gunshots, we quickly closed the window and ducked"
                        },
                        "testi9": {
                            "title": "",
                            "p": "Kai gave us the strength to fight. We knew we couldn't give up and had to do everything to save him. He is the hero who saved us and we won. They destroyed our house, burned everything we had. But they didn't take our lives. They came here with the aim of killing or kidnapping us but they failed!"
                        },
                        "subtitle": "TO REBUILD DREAMS AND LIVES",
                        "images": {
                            "alt": 'Image of the kibbutz after the attack'
                        }
                    },
                    "kibbutz": {
                        "title": "GOING BACK HOME TO KIBBUTZ NIRIM",
                        "subtitle1": "A beacon of community and resilience.",
                        "subtitle2": "Returning Home",
                        "text": "The Kibbutz Nirim community has been shaped by decades of resilience and the cultivation of a strong community tradition, passed down through generations. We are currently focused on healing and rebuilding the community, but our thoughts and hearts are set on returning home to Kibbutz Nirim. To make this possible, we need to help the community recover from the crisis and rebuild their lives by creating designated spaces that serve as infrastructure for joint community activities, projects aimed at nurturing education, stimulating economic growth, and enhancing communal life, while also fostering a safe and supportive environment.",
                        "photoAlt": "Field of flowers in the kibbutz"
                    },
                    "needs": {
                        "title": "What do we need:",
                        "subtitle": "Rebuilding Kibbutz Nirim: Key Development Projects",
                        "ul": {
                            "li1": {
                                "subtitle": "Educational Facilities: ",
                                "text": "Revitalize learning environments to foster creativity and joy. Plans include expanding our kindergarten to enrich early education, constructing a new youth club for community engagement, and launching diverse educational activities for children and teens."
                            },
                            "li2": {
                                "subtitle": "Health and Wellness: ",
                                "text": "Establish support systems with therapeutic programs and a new sports center, providing physical and emotional rehabilitation for residents affected by trauma."
                            },
                            "li3": {
                                "subtitle": "Community Revitalization: ",
                                "text": "Upgrade communal spaces into safe and welcoming areas for interaction and growth, such as building a vibrant playground, enhancing the community garden and turning the swimming pool into a community hub"
                            },
                            "li4": {
                                "subtitle": "In the business field: ",
                                "text": "Strengthen economic and environmental sustainability by implementing strategic infrastructure projects that generate revenue and secure resources"
                            },
                            "link": "Learn more..."
                        }
                    },
                    "cta": {
                        "text2": "please feel free to contact us for more information",
                        "text": "We invite you to join us in our journey back home to Kibbutz Nirim. Your support is not just a contribution—it's an investment in the future of Nirim's community, a testimony to the power of solidarity and unity, and an example of the resilience of Am Israel.",
                        "button": "Donate"
                    },
                    "contact": {
                        "title": "Sing up to our newslatter"
                    },
                    "projects": {
                        "educational": {
                            "kinderGarden": {
                                "title": "Renovation and expansion of the kindergarten",
                                "text1": "The kibbutz's kindergarten, the equipment, and the yards around were damaged by the 7.10 attack and by the many rockets and missiles fired at the kibbutz grounds since then. With your generous support, we can rebuild and expand our kindergarten, creating a space that inspires creativity, learning, and joy. Your donation will not just fund bricks and mortar; it will sow the seeds of a brighter future for future generations.",
                                "budget": "Total Project Budget:   $850,000",
                                "needed": "Total funding needed: $650,000",
                                "text2": "The budget encompasses building renovation, adding two new kindergarten classes, kindergarten and yard equipment"
                            },
                            "activities": {
                                "title": "Educational activities",
                                "text1": "Creating an array of informal education activities for kids and teenagers",
                                "budget": "       Total Project Budget: $100,000"
                            },
                            "youthClab": {
                                "title": "Youth Club",
                                "text1": "After the existing structure was infiltrated and severely damaged by the terrorists on October 7th, our teens’ club needs to be restored, expanded and upgraded.",
                                "budget": "      Total Budget Project: $300,000"
                            }
                        },
                        "health": {
                            "therapies": {
                                "title": "Treatment and Therapies",
                                "text1": "Complementary treatment and therapies for victims of 7/10",
                                "budget": "Per year: $100,000"
                            },
                            "sportsCenter": {
                                "title": " A Sports Center for Children and Youth",
                                "text1": "The new sports center for children and youth in Nirim will provide a safe and enjoyable environment, as well as physical and emotional treatment and rehabilitation",
                                "text2": "The center will cater to individual and group activities and will be supervised by certified professionals and trainers.",
                                "subtitle": "The center will feature the following facilities:",
                                "ul": {
                                    "li1": "A \"Ninja\" complex that is tailored to different age groups $200,000",
                                    "li2": "A climbing wall that is suitable for various difficulty levels $150,000",
                                    "li3": "A Gymboree Complex specifically designed for toddlers $50,000"
                                },
                                "budget": " Total Project Budget: $400,000"
                            }
                        },
                        "community": {
                            "colorfulPlayground": {
                                "title": "A new colorful playground",
                                "text1": "Providing the children of the kibbutz with an inviting and enjoyable play space and a fun meeting place for children and young parents",
                                "subtitle": "The playground will feature:",
                                "ul": {
                                    "li1": "Swings adapted for different ages",
                                    "li2": "Climbing equipment",
                                    "li3": "A playground for toddlers",
                                    "li4": "A huge adventure facility",
                                    "li5": "Lawns and seating areas."
                                },
                                "budget": "  Total Project Budget: $500,000"
                            },
                            "diningHall": {
                                "title": "Renovation and protective reinforcement of the dining hall and the Grocery Store",
                                "text1": "Kibbutz Nirim is situated so close to the border, that they are exposed to mortar as well as rocket fire. When there is an incoming alert, people only have between 0-10 seconds to get to a protected area.",
                                "highlight1": "A kibbutz's communal dining room",
                                "text2": " is the community's heart and soul. Nirim’s dining hall is too small to accommodate all the community members; therefore, community-wide events and activities, holiday meals, and shared Friday evening meals are held on the kibbutz lawns in the open air. ",
                                "highlight2": "Moving the kibbutz dining room to a spacious and protected space",
                                "text3": "Will allow the entire community to gather safely and celebrate holidays together, hold joint Friday meals and community events, even in difficult, tense times."
                            },
                            "groceryStore": {
                                "title": "Nirim’s grocery store",
                                "text1": "Serves the residents of Nirim and the surrounding communities. Customers and staff must run to the nearest protected place outside the store during emergencies.",
                                "text2": "The new grocery store will be built on the upper floor of the two-story dining hall building. The complex will allow the expansion of the grocery area and the construction of a more innovative system that will provide more efficient service to the kibbutz residents and the residents of the nearby communities. ",
                                "text3": "The budget encompasses building renovation, purchasing equipment and furniture for the dining room,  adapting the structure for storing and cooling food products for the grocery store",
                                "budget": "The total budget needed for the dining hall and grocery store: $1,000,000"
                            },
                            "communityGarden": {
                                "title": "Community Garden",
                                "text1": "Upgrading and expanding the community Garden into an experiential space for joint activities for parents and children, including a Bedouin tent and tabun oven",
                                "budget": "Total Project Budget $80,000 "
                            },
                            "pool": {
                                "title": "Swimming Pool Restoration",
                                "text1": "Transform the existing swimming pool into a community hub, enhancing its utility and accessibility year-round.",
                                "subtitle": "The budget encompasses Renovations and Enhancements:",
                                "ul": {
                                    "li1": "Heating System: Install a heating system pool for optimal use throughout a longer period of the year",
                                    "li2": "Community Space Development: Develop surrounding areas for community events and social gatherings."
                                },
                                "budget": "Total Project Budget: $200,000"
                            }
                        },
                        "infrastructure": {
                            "dairy": {
                                "title": "Restoration and Upgrading of Nirim’s Dairy",
                                "text": "On October 7, during the Hamas attack on the Kibbutz, a missile struck the cowshed, causing severe damage to the roof and disrupting electricity and water infrastructure.",
                                "text2": "The restoration and upgrading of the cowshed will allow an increase of 700,000 liters (185,000 gallons) in the annual milk quota, strengthening the economic resilience of the kibbutz and of the entire Western Negev region",
                                "budget": "Total Project Budget:    $ 4,000,000",
                                "needed": "Total Funding Needed: $ 2,500,000",
                                "ul": {
                                    "title": "The budget encompasses :",
                                    "li1": "The renovation of the roof and existing shades",
                                    "li2": "The expansion and automation of the milking center",
                                    "li3": "Upgrading the feeding area to a more modern and efficient setup",
                                    "li4": "Building two additional sheds for enhanced capacity"
                                }
                            },
                            "reservoir": {
                                "title": "Reconstructing the Reservoir for Future Use",
                                "subtitle": "Was established in the Western Negev region as part of the fulfillment of David Ben-Gurion's Zionist dream “To develop the Negev and make the desert bloom”",
                                "text1": "Nirim’s Reservoir collects floodwater from the Besor River during the rainy season to provide irrigation for the agricultural fields of Kibbutz Nirim during the dry months.",
                                "ul": {
                                    "li1": "The reservoir is vital in sustaining Nirim’s agricultural activities with a volume of about 600,000 cubic meters.",
                                    "li2": "Recent years of limited rainfall have resulted in fewer floods, which has impacted the quantity and quality of water in the reservoir.",
                                    "li3": "A missile strike during The Swords of Iron War damaged the reservoir's sealing, further complicating water storage and quality maintenance."
                                },
                                "text2": "Establishing the water reservoir leased to the State of Israel will generate an annual income of $410,000 for Kibbutz Nirim. The State has committed to a 15-year lease agreement, enhancing the kibbutz’s financial stability.",
                                "text3": "The budget encompasses constructing a 3 km-long water pipeline, a pump complex with remote control, a leasing system for the State of Israel, filtration, chlorination, and water control. In addition, fencing infrastructure, safety, permits, and planners are included.",
                                "budget": "Total Project Budget: $2,500,000",
                                "needed": "Total Funding Needed: $1,500,000"
                            }
                        }
                    }
                }
            },
            he: {
                translation: {
                    donation: {
                        link: "https://my.israelgives.org/he/fundme/Nirim"
                    },
                    error: {
                        title: "אופס! הדף לא קיים",
                        text: 'אופס! הדף שאתה מחפש לא קייםת אולי הוא הוסר או שונתה הכתובת',
                        btn: 'חזרה לדף הבית'
                    },
                    header: {
                        nav1: 'אודות',
                        nav2: 'לתרומה',
                        nav3: 'פרוייקטים',
                        nav4: 'צור קשר'
                    },
                    footer: {
                        contact: {
                            title: 'צור קשר:',
                            phone: 'טלפון:',
                            phoneNumber: '+972-52-482-7994',
                            email: 'אימייל:',
                        },
                        links: {
                            title: 'קישורים',
                            item1: 'אתר הקיבוץ',

                        },
                        subscribe: {
                            title: 'הירשמו לעדכונים',
                            firstName: {
                                ariaLabel: 'שם פרטי',
                                placeholder: 'שם פרטי',
                                required: 'שדה חובה',
                                min: 'שם קצר מדי',
                                max: 'שם ארוך מדי',
                            },
                            lastName: {
                                ariaLabel: 'שם משפחה',
                                placeholder: 'שם משפחה',
                                required: 'שדה חובה',
                                min: 'שם קצר מדי',
                                max: 'שם ארוך מדי',
                            },
                            email: {
                                ariaLabel: 'האימייל שלך',
                                placeholder: 'אימייל',
                                required: 'שדה חובה',
                                errorMsg: 'אימייל לא תקין',
                                errorMsg1: 'אימייל קיים במערכת',
                                errorMsg2: 'נשלח בהצלחה',
                            },
                            number: {
                                ariaLabel: 'מספר טלפון',
                                placeholder: 'מספר טלפון',
                                msg: 'מספר טלפון לא תקין'
                            },
                            checkBox: {
                                ariaLabel: 'מאשר/ת קבלת עדכונים',
                                label: 'מאשר/ת קבלת עדכונים',
                            },
                            button: 'שליחה',

                        },
                    },
                    hero: {
                        title: "אודות קיבוץ נירים",
                        subtitle: 'קיבוץ נירים ',
                        text: `נוסד בשנת 1946, מהישובים הראשונים שהוקמו באזור הנגב המערבי, כחלק מחזון בן גוריון ליישב את הנגב ולהפריח את הדממה.
נירים הוא ישוב חקלאי ומאז ומעולם החקלאות היוותה מקור הפרנסה העיקרי של הקהילה. בקיבוץ ענף גידולי שדה החולש על שטחים נרחבים, מטעי אבוקדו עתיקים ועשירים, חממות ורפת שהתוצרים וההישגים המקצועיים שלהם הם מהטובים בישראל ומשק אורגני מהגדולים במדינה.
`,
                        src: "https://www.youtube.com/embed/fiMhV3ZYPn8",
                        overlayText: 'קיבוץ נירים',
                    },

                    afterOct: {
                        sectionTitle: "הטבח בקיבוץ נירים",
                        title: 'בבוקר ה 7 באוקטובר ',
                        p: `פלשו לקיבוץ עשרות מחבלים ובמשך שעות ארוכות הם השתלטו על הקיבוץ, רצחו, חטפו, שרפו, השמידו ובזזו כל מה שנכרה בדרכם. התושבים נאבקו והגנו על בתיהם ועל משפחותיהם במשך שעות, בזמן שהמחבלים פרצו לבתים, ירו והשליכו רימונים.
בטבח בנירים נרצחו 5 תושבים, 5 נחטפו מביתם, 2 מהם חטופים עדיין בידי החמאס.  ההרס הקהילתי והפיסי הוא עצום. 30 בתים נשרפו כליל, מבנים ושטחים ציבוריים רבים נהרסו, תשתיות רחבות הושמדו. כ-60% מהשטחים החקלאיים, אשר מהווים מקור הפרנסה העיקרי של הקיבוץ, נשרפו והושמדו. הקהילה נעקרה מביתה ונמצאת היום במעונה הזמני בבאר שבע.
`,
                        testiTitle: 'עדויות',
                        testi1: {
                            title: 'ברק ל.',
                            p: "בעלי מכוון את הנשק לכיוון הדלת  ,בשלב הזה האזעקות והדי הפיצוצים ברקע הם אחרון הבעיות שלנו, אני אומרת לעצמי שאם הם ייכנסו וירו , אני אגן על ילדי , אני אגן עליהם בגופי...."
                        },
                        testi2: {
                            title: 'מרים מ.',
                            p: 'אני לבד בבית בממ"ד, מנסה להבין מה קורה, כל הזמן הזה חושבת על בני שהלך לאחת המסיבות, אני יודעת שהוא מצא מקום מסתור אבל רק אחרי שהתאחדנו הוא סיפר לי שבמקום מוחבא הסתובבו המחבלים סביבם על האופנועים.'
                        },
                        testi3: {
                            title: 'יוסי ק.',
                            p: 'ביום שבת בבוקר לקחתי את הכלב של הבת לטיול, היינו בדרך לכיוון השער האחורי כדי לצאת לשדות כאשר התחילו האזעקות. רצתי לתפוס מחסה באזור של מקלט ישן ליד מועדון הנעורים וחיכתי , אבל האזעקות והדי הפיצוצים לא פסקו. לאחר בערך שעה , החלטתי לרוץ לכיוון הבתים במטרה להיכנס לאחד מהם לממ"ד. כל הבתים היו נעולים.....'
                        },
                        testi4: {
                            title: 'אלדד ה.',
                            p: 'אשתי קוראת את ההודעות בקבוצה של הקיבוץ בנייד, אנחנו מבינים שאנחנו צריכים לנעול את עצמנו בממ"ד, אבל אין לדלת מנעול , ואנחנו שומעים קולות בתוך הבית. אני עומד ליד הדלת, מחזיק בידית ומתפלל שהם לא ייכנסו דרך החלון. בינתיים אשתי עם כוחות ותושייה רבה מרגיעה את בני בן השנתיים ובאותו זמן שולחות הודעות מצוקה ומבקשת עזרה.'
                        },
                        "testi5": {
                            "title": "",
                            "p": "בבית משפחת לבן - צרפתי היו בבית באותה שבת אבא אוריאל, אמא איימי, סבתא דבורה וקאי התינוק בן העשרה ימים. יומיים לפני כן נערך ברית המילה שלו בקיבוץ."
                        },
                        "testi6": {
                            "title": "אוריאל",
                            "p": `שמענו את המחבלים פורצים את הדלת של הבית. שמענו אותם מהממ"ד מדברים בערבית, שוברים והורסים את הבית.ואז הם ניסו לפתוח את דלת הממ"ד. אשתי ואני החזקנו בידית בכל הכוח. באותו זמן חמותי החזיקה את אוריאל בן העשרה ימים בידים, שמה לו אצבע בפה כדי שלא יבכה, כדי שלא ישמעו אותו...`
                        },
                        "testi7": {
                            "title": "",
                            "p": `לאחר כמה דקות המחבלים הפסיקו לנסות לפרוץ את דלת הממ"ד ואז שמענו קולות של פצפוצים והתחלנו להריח את העשן. בזמן שנלחמנו על ידית הדלת, המסגרת ככל הנראה זזה מעט ונוצר חריץ בדלת, דרכו התחיל להיכנס עשן לממ"ד. ואז הבנו שהם הציתו את הבית`
                        },
                        "testi8": {
                            "title": "",
                            "p": `במשך שש שעות אשתי, חמותי ואני נכנסנו למעין "משחק". העשן נכנס דרך חריץ הדלת בממ"ד ובכל כמה דקות פתחנו בזהירות מעט את חלון המתכת של הממ"ד,  כל אחד בתורו, קירבנו את אוריאל בן העשרה ימים לחלון ונשמנו מעט אויר. בכל פעם שראינו מחבל ליד החלון או שמענו יריות סגרנו מהר את החלון והתכופפנו`
                        },
                        "testi9": {
                            "title": "",
                            "p": `קאי נתן לנו את הכוח להילחם. ידענו שאנחנו לא יכולים לוותר וצריכים לעשות הכל כדי להציל אותו. הוא הגיבור שהציל אותנו ואנחנו ניצחנו. הם הרסו לנו את הבית, שרפו את כל מה שהיה לנו. אבל הם לא לקחו לנו את החיים. הם באו לפה במטרה להרוג או לחטוף אותנו והם לא הצליחו. אנחנו ניצנו! ואני מחכה לרגע שבו נוכל לחזור לנירים לבנות את הבית מחדש`
                        },
                        subtitle: ' בונים עתיד, זורעים תקווה',
                        images: {
                            alt: 'תמונה של הקיבוץ לאחר המתקפה'
                        }
                    },
                    kibbutz: {
                        title: 'חוזרים הביתה לנירים',
                        subtitle1: 'מגדלור של קהילה וחוסן.',
                        subtitle2: 'חוזרים הביתה',
                        text: `החוסן והצביון של קהילת נירים הושרשו על ידי דור המייסדים והועברו במהלך השנים לדורות הצעירים, אשר חונכו תחת ערכים של אהבת הארץ, אחדות וערבות הדדית.
והיום, למרות הכאב והצער, קהילת נירים נחושה לבנות ולזרוע מחדש, ולשוב ולעבד את האדמה עד לתלם האחרון!
החזון הוא לא רק לבנות מחדש את הבית, אלא לשפר אותו – לייצר מרחבים שיאפשרו קיום מפגשים ופעילויות חברתיות וקהילתיות, ויהוו תשתית לסביבה בטוחה ותומכת לשיקום ובנייה מחודשת של חיי הקהילה, לפתח מיזמים חברתיים ועסקיים שיחזקו את החוסן הקהילתי והכלכלי של הקיבוץ ולייצר סביבה אטרקטיבית שתהווה אבן שואבת לחזרת הקהילה הותיקה ולהצטרפותם של תושבים חדשים שיבואו ויבנו את ביתם בנירים.
`,
                        photoAlt: 'שדה פרחים בקיבוץ'
                    },
                    needs: {
                        title: 'מה אנחנו צריכים',
                        subtitle: 'תרומתכם תסייע לנו לקדם מיזמים שיאפשרו לקהילת נירים לבנות את חייהם מחדש',
                        ul: {
                            li1: {
                                subtitle: 'חינוך:',
                                text: ' הקמת תשתיות שייצרו סביבת התפתחות ולמידה תומכת, יצירתית, חדשנית ומטפחת:',
                            },
                            li2: {
                                subtitle: 'בריאות ושיקום הגוף והנפש:',
                                text: ' הקמת מערכי תמיכה עם תכניות טיפוליות ומרכז ספורט חדש, שיאפשרו שיקום פיזי ורגשי לחברי הקיבוץ',
                            },
                            li3: {
                                subtitle: 'שיקום קהילתי:',
                                text: 'הקמת תשתיות ומרחבים שיאפשרו מפגשים ופעילויות קהילתיות בסביבה בטוחה ונעימה ויעניקו לקהילה את האפשרות לייצר שוב אינטראקציות קהילתיות וחוויות מעצימות',
                            },
                            li4: {
                                subtitle: 'בתחום העסקי: ',
                                text: 'הקמה והרחבה של תשתיות ומיזמים עסקיים לחיזוק החוסן הכלכלי של הקיבוץ ויצירת תשתית כלכלית איתנה לעתיד קהילת נירים',
                            },
                            link: 'מידע נוסף... '
                        },
                    },
                    cta: {
                        text2: "אנא אל תהססו לפנות אלינו לקבלת מידע נוסף",
                        text: `אנו מזמינים אתכם להצטרף אלינו למסע חזרה הביתה לקיבוץ נירים. התמיכה שלכם היא לא רק תרומה — היא השקעה בעתיד הקהילה של נירים, עדות לכוחן של סולידריות ואחדות, ודוגמה לחוסן של עם ישראל.`,
                        button: 'לתרומה',
                    },
                    contact: {
                        title: 'הירשמו לרשימת עדכונים',
                    },
                    projects: {
                        educational: {
                            kinderGarden: {
                                title: 'שיפוץ והרחבת גן הילדים',
                                text1: `גן הילדים של הקיבוץ ספג פגיעות מפצמ"רים וטילים שנורו במהלך חודשי המלחמה. פרויקט שיקום הגן כולל שיפוץ והרחבת המבנה, שיפוץ החצרות ויצירת מרחב בטוח, המעורר יצירתיות ולמידה בסביבה תומכת, בריאה ושמחה.`,
                                budget: 'תקציב פרויקט כולל: $850,000',
                                needed: 'סך התרומה הנדרשת: $650,000',
                                text2: 'התקציב כולל שיפוץ מבנים, הוספת שתי כיתות גן חדשות, ציוד גן וחצר',
                            },
                            activities: {
                                title: 'פעילויות חינוכיות',
                                text1: 'יצירת מערך לקידום פעילויות חינוכיות ויסיוע בצמצום פערים לימודיים עבור ילדים ובני נוער',
                                budget: 'תקציב נדרש: $100,000',
                            },
                            youthClab: {
                                title: 'בניית מועדון נוער:',
                                text1: ' בית הנוער הישן של הקיבוץ נפגע מפגיעות פצמ"רים ומועמד להריסה',
                                budget: 'תקציב נדרש לבנית מועדון נוער חדש: $300,000',
                            },
                        },
                        health: {
                            therapies: {
                                title: '  בתחום בריאות ושיקום הגוף והנפש:',
                                text1: "יצירת מעטפת טיפולית משלימה הכוללת טיפולים רפואיים ופרה-רפואיים עבור נפגעי ה 7.10",
                                budget: 'תקציב שנתי: $100,000'
                            },
                            sportsCenter: {
                                title: 'מרכז ספורט לילדים ונוער',
                                text1: 'הקמת מרכז ספורט חדש שיאפשר שיקום פיזי ורגשי',
                                text2: 'מרכז הספורט החדש לילדים ונוער בקיבוץ נירים יעניק סביבה בטוחה ומהנה, כמו גם טיפול ושיקום פיזי ורגשי. במרכז יתקיימו פעילויות אישיות וקבוצתיות בליווי ופיקוח אנשי מקצוע ומאמנים מוסמכים.',
                                subtitle: 'המרכז יכלול:',
                                ul: {
                                    li1: `מתחם "נינג'ה" המותאם לקבוצות גיל שונות $200,000`,
                                    li2: 'קיר טיפוס ברמות קושי שונות $150,000',
                                    li3: `מתחם ג'ימבורי ייעודי עבור פעוטות $50,000`,
                                },
                                budget: 'תקציב הפרוייקט $400,000'
                            },
                        },
                        community: {
                            colorfulPlayground: {
                                title: 'הקמת פארק משחקים חדש וצבעוני עבור ילדי הקיבוץ',
                                text1: 'יאפשר לילדי הקיבוץ מרחב משחק מזמין ומהנה ומקום מפגש בטוח עבור ילדים ומשפחות צעירות',
                                subtitle: 'מגרש המשחקים יכלול:',
                                ul: {
                                    li1: 'נדנדות מותאמות לגילאים שונים',
                                    li2: 'מתקני טיפוס',
                                    li3: 'מגרש משחקים לפעוטות',
                                    li4: 'מתקן הרפתקאות ענק',
                                    li5: 'מדשאות ופינות ישיבה'
                                },
                                budget: 'תקציב הפרויקט: $500,000'
                            },
                            diningHall: {
                                title: 'שיפוץ וחיזוק מיגון חדר האוכל והמכולת',
                                text1: "בשל קרבתו של הקיבוץ לגבול, הגעה למקום בטוח בזמן אזעקה היא בין 0 ל-10 שניות.",
                                highlight1: "חדר אוכל משותף של קיבוץ",
                                text2: "הוא הלב והנשמה של הקהילה. חדר האוכל של נירים קטן מכדי להכיל את כל חברי הקהילה; לפיכך, אירועים ופעילויות כלל קהילתיים, ארוחות חג וארוחות שישי משותפות מתקיימים במדשאות הקיבוץ באוויר הפתוח.",
                                highlight2: 'העברת חדר האוכל של הקיבוץ לחלל מרווח ומוגן',
                                text3: "יאפשר לכל הקהילה להתכנס בבטחה ולחגוג יחד חגים, לערוך ארוחות שישי משותפות ואירועים קהילתיים, גם בזמנים קשים ומתוחים."
                            },
                            groceryStore: {
                                title: 'המכולת של נירים',
                                text1: 'משרת את תושבי נירים וישובי הסביבה. לקוחות וצוות חייבים לרוץ למקום המוגן הקרוב ביותר מחוץ לחנות בשעת חירום.',
                                text2: '',
                                text3: 'המכולת החדשה תוקם בחנות העליונה של בניין חדר האוכל. המתחם יאפשר את הרחבת שטח המכולת ובניית מערך חדשני יותר שייתן שירות יעיל יותר לתושבי הקיבוץ ולתושבי הישובים הסמוכים.',
                                budget: 'התקציב הכולל הדרוש לחדר האוכל והמכולת: $1,000,000 '
                            },
                            communityGarden: {
                                title: 'גינה קהילתית',
                                text1: `שדרוג והרחבת הגינה הקהילתית, יצירת מרחב לפעילויות חוויתיות עבור הקהילה, פעילויות משפחתיות, הורה וילד וכד'. כולל הקמת אזור מאהל בדואי ללינת לילה, התקנת תנור טאבון ועוד.`,
                                budget: 'תקציב הפרויקט: $80,000'
                            },
                            pool: {
                                title: 'שיקום ושדרוג בריכת השחייה:',
                                text1: 'בריכת השחייה והמדשאות שמסביב מהווים מקום בילוי מרכזי עבור ילדי הקיבוץ במהלך חודשי הקיץ ומקום בילוי מרכזי עבור הקהילה כולה.',
                                subtitle: 'תקציב שיקום הבריכה כולל:',
                                ul: {
                                    li1: 'על מנת למקסם את השימוש במתחם בריכת השחייה יש צורך בהתקנת מערכת לחימום המים, שתאפשר שימוש בבריכה לתקופה ארוכה יותר במהלך השנה.',
                                    li2: 'שיפוץ: בזמן מלחמת חרבות ברזל הבריכה ספגה פגיעת פצמ"ר. נדרש איטום ושיפוץ של הבריכה עצמה. בנוסף, התקציב כולל התקנת מערכת חימום ופיתוח כללי של המרחב הקהילתי סביב הבריכה'
                                },
                                budget: 'תקציב הפרויקט: $200,000'
                            },
                        },
                        infrastructure: {
                            dairy: {
                                title: 'שיקום ושדרוג הרפת והמחלבה של קיבוץ נירים',
                                text: 'ב-7 באוקטובר, במהלך מתקפת הטרור ומטח הטילים שנורו באותו בוקר על ישראל, פצמ"ר פגע פגיעה ישירה ברפת של הקיבוץ. כתוצאה מהפגיעה נהרגו פרות רבות, ונזק חמור נגרם לגג ולתשתיות המים והחשמל של מחלבת קיבוץ נירים.',
                                text2: 'שיקום ושדרוג הרפת יאפשר הגדלה של 700,000 ליטר (185,000 גלונים) במכסת החלב השנתית, ויתרום בצורה משמעותית לחיזוק החוסן הכלכלי של הקיבוץ ושל אזור הנגב המערבי כולו.',
                                budget: 'סך תקציב הפרויקט: $4,000,000',
                                needed: 'סך המימון הנדרש: $2,500,000',
                                ul: {
                                    title: ' התקציב כולל: ',
                                    li1: 'חידוש ושיפוץ גג הרפת',
                                    li2: 'התקנת שתי סככות חדשות לצורך הרחבת שטח המחייה',
                                    li3: 'הריבה, שדרוג ואוטומציה של מרכז החליבה ושל אזור ההאכלה',
                                    li4: ''
                                },
                            },
                            reservoir: {
                                title: 'חיבור מאגר המים של קיבוץ נירים לקו המים הארצי',
                                subtitle: `הוקמה באזור הנגב המערבי כחלק מהגשמת חלומו הציוני של דוד בן גוריון – "לפתח את הנגב ולהפריח את המדבר"`,
                                text1: 'מאגר המים של קיבוץ נירים הוקם בשנות ה 70 כדי לאגור מים מנחל הבשור במהלך החודשים הגשומים ולספק מי השקיה לשדות החקלאיים של קיבוץ נירים בחודשי הקיץ היבשים ובתקופות של בצורת.',
                                ul: {
                                    li1: 'המאגר חיוני לקיום הפעילות החקלאית של נירים בנפח של כ-600,000 מ"ק.',
                                    li2: 'השנים האחרונות של כמות גשמים מוגבלת הביאו לפחות שיטפונות, מה שהשפיע על כמות ואיכות המים במאגר.',
                                    li3: `שנים של בצורת ופגיעות של פצמ"רים אשר פגעו באיטום המאגר במהלך מלחמת חרבות ברזל גרמו לירידה בכמות ובאיכות המים במאגר.`,
                                },
                                text2: 'בימים אלה מדינת ישראל מבקשת לחבר את מאגר המים של קיבוץ נירים לצינורות המים האזוריים כדי לאפשר לקיבוצים וישובים נוספים באזור שימוש במי המאגר להשקיית השדות החקלאיים שלהם. בתמורה, המדינה תעניק לנירים חוזה שכירות לתקופה של 15 שנים, במסגרתו תשלם לקיבוץ סכום שנתי של $400,000',
                                text3: 'התקציב כולל: הקמת צינור באורך 3 ק"מ, הקמת מתחם מערכת משאבות נשלט מרחוק, התקנת מערכת סינון, טיהור ובקרת איכות של המים וכן התקנת גידור ומערכת אבטחה של מאגר המים.',
                                budget: 'תקציב פרויקט כולל: $2,500,000',
                                needed: ' סך המימון הדרוש: $1,500,000'
                            }
                        },
                    },
                }
            },
        }
    });

export default i18n;