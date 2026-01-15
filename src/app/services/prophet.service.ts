import { Injectable } from '@angular/core';
import { Prophet, ProphetData, ProphetRelationship } from '../models/prophet.model';

/**
 * ProphetService - Manages prophet data
 * This service provides methods to fetch and manage data about all 25 prophets mentioned in the Quran
 */
@Injectable({
  providedIn: 'root'
})
export class ProphetService {
  
  private prophetData: ProphetData;
  
  constructor() {
    this.prophetData = this.initializeProphetData();
  }

  /**
   * Initialize all prophet data with separated prophets and relationships
   */
  private initializeProphetData(): ProphetData {
    const prophets: Prophet[] = [
      {
      id: 1,
      name: 'Adam',
      arabicName: 'آدم',
      era: 'Ancient Times',
        lifeSpan: '930 years (according to tradition)',
        description: 'The first prophet and first human created by Allah. He is considered the father of humanity. Allah taught him the names of all things.',
        locationSent: 'Earth (Paradise initially)',
        majorEvents: ['Creation', 'Fall from Paradise', 'Repentance accepted by Allah'],
        miracles: ['Given knowledge of all names', 'Created directly by Allah'],
        resources: {
          videos: [
            { title: 'The Story of Prophet Adam (AS)', url: 'https://www.youtube.com/results?search_query=Prophet+Adam+story+Islamic', creator: 'Islamic Guidance' },
            { title: 'Adam and Eve in Islam', url: 'https://www.youtube.com/results?search_query=Adam+and+Eve+Islam', creator: 'Merciful Servant' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir', description: 'Classical Islamic text detailing the lives of all prophets' },
            { title: 'The Sealed Nectar', author: 'Safi-ur-Rahman al-Mubarakpuri' }
          ],
          quranRefs: ['2:30-39', '7:19-25', '20:115-123']
        }
      },
        {
          id: 2,
        name: 'Idris',
        arabicName: 'إدريس',
        era: 'Ancient Times (before Noah)',
        description: 'A prophet known for his wisdom, patience, and truthfulness. He was raised to a high station by Allah.',
        locationSent: 'Ancient Babylon (according to tradition)',
        majorEvents: ['Raised to high station', 'Given knowledge of astronomy and mathematics'],
        miracles: ['Raised to a high place by Allah'],
        resources: {
          videos: [
            { title: 'The Story of Prophet Idris (Enoch)', url: 'https://www.youtube.com/results?search_query=Prophet+Idris+story', creator: 'One Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['19:56-57', '21:85-86']
        }
      },
      {
        id: 3,
          name: 'Noah',
          arabicName: 'نوح',
          era: '2104 BCE - 2004 BCE (approx.)',
        lifeSpan: '950 years of preaching',
        description: 'Preached for 950 years to his people calling them to monotheism. Built the Ark and survived the Great Flood with believers.',
        locationSent: 'Ancient Mesopotamia',
        majorEvents: ['Called his people for 950 years', 'Built the Ark', 'The Great Flood', 'Repopulation of Earth'],
        miracles: ['The Ark that saved believers', 'Survival of the Great Flood'],
        parentIds: [1],
        resources: {
          videos: [
            { title: 'The Story of Prophet Noah (Nuh)', url: 'https://www.youtube.com/results?search_query=Prophet+Noah+story+Islam', creator: 'Islamic Reminders' },
            { title: 'Noah\'s Ark - Islamic Perspective', url: 'https://www.youtube.com/results?search_query=Noah+Ark+Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'The Ark of Noah', author: 'Muhammad Ali' }
          ],
          quranRefs: ['11:25-49', '71:1-28', '23:23-30']
        }
      },
      {
        id: 4,
        name: 'Hud',
        arabicName: 'هود',
        era: 'Ancient Times (after Noah)',
        description: 'Sent to the people of \'Ad who lived in Al-Ahqaf. Warned them against idolatry and arrogance.',
        locationSent: 'Al-Ahqaf (Southern Arabia)',
        tribe: '\'Ad',
        majorEvents: ['Warned people of \'Ad', 'Destruction of \'Ad by wind storm'],
        miracles: ['Saved from the destructive wind'],
        parentIds: [3],
        resources: {
          videos: [
            { title: 'The Story of Prophet Hud', url: 'https://www.youtube.com/results?search_query=Prophet+Hud+story', creator: 'Bayyinah TV' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['11:50-60', '26:123-140', '46:21-26']
        }
      },
      {
        id: 5,
        name: 'Saleh',
        arabicName: 'صالح',
        era: 'Ancient Times',
        description: 'Sent to the people of Thamud. Performed the miracle of the she-camel from solid rock.',
        locationSent: 'Al-Hijr (Northern Arabia)',
        tribe: 'Thamud',
        majorEvents: ['The miracle of the she-camel', 'Destruction of Thamud by earthquake'],
        miracles: ['The she-camel that came from rock', 'Earthquake that destroyed the disbelievers'],
        parentIds: [3],
        resources: {
          videos: [
            { title: 'The Story of Prophet Saleh and the She-Camel', url: 'https://www.youtube.com/results?search_query=Prophet+Saleh+she+camel', creator: 'The Daily Reminder' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['11:61-68', '26:141-159', '7:73-79']
        }
      },
      {
        id: 6,
              name: 'Abraham',
              arabicName: 'إبراهيم',
              era: '2166 BCE - 2071 BCE (approx.)',
        lifeSpan: '175 years',
        scripture: 'Scrolls of Abraham (Suhuf Ibrahim)',
        description: 'The Khalil (Friend) of Allah. Father of Ishmael and Isaac. Built the Ka\'bah with Ishmael. Known for his unwavering faith and willingness to sacrifice his son.',
        locationSent: 'Ur, Canaan, Egypt, Mecca',
        tribe: 'Descendant of Shem',
        majorEvents: ['Destroyed the idols', 'Thrown into fire but saved', 'Migration to Canaan', 'Building of Ka\'bah', 'Test of sacrificing his son'],
        miracles: ['Saved from Nimrod\'s fire', 'The fire became cool and peaceful'],
        parentIds: [3],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ibrahim', url: 'https://www.youtube.com/results?search_query=Prophet+Ibrahim+story', creator: 'Islamic Guidance' },
            { title: 'Ibrahim and the Ka\'bah', url: 'https://www.youtube.com/results?search_query=Ibrahim+Kaaba+building' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Abraham: The Friend of God', author: 'Various Islamic Scholars' }
          ],
          quranRefs: ['2:124-141', '14:35-41', '21:51-73', '37:99-113']
        }
      },
      {
        id: 7,
        name: 'Lot',
        arabicName: 'لوط',
        era: '2000 BCE (approx.)',
        description: 'Nephew of Abraham. Sent to the people of Sodom and Gomorrah who were committing immoral acts.',
        locationSent: 'Sodom and Gomorrah',
        majorEvents: ['Preached against immorality', 'Visited by angels', 'Destruction of his people', 'His wife perished for disobedience'],
        miracles: ['Saved from destruction along with believers'],
        parentIds: [6],
        resources: {
          videos: [
            { title: 'The Story of Prophet Lut (Lot)', url: 'https://www.youtube.com/results?search_query=Prophet+Lut+story', creator: 'One Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['7:80-84', '11:77-83', '26:160-175']
        }
      },
      {
        id: 8,
                  name: 'Ishmael',
                  arabicName: 'إسماعيل',
                  era: '2081 BCE - 2000 BCE (approx.)',
        lifeSpan: '137 years',
        description: 'Son of Abraham and Hagar. Father of the Arab people. Helped his father build the Ka\'bah. Known for his patience and obedience. Ancestor of Prophet Muhammad ﷺ.',
        locationSent: 'Mecca',
        tribe: 'Forefather of Arab tribes',
        majorEvents: ['Settlement in Mecca', 'Building Ka\'bah with Abraham', 'The test of sacrifice', 'Marriage to Jurhum tribe'],
        miracles: ['Zamzam water spring at his feet', 'Protected in the desert as an infant'],
        parentIds: [6],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ismail', url: 'https://www.youtube.com/results?search_query=Prophet+Ismail+story', creator: 'Islamic Stories' },
            { title: 'The Sacrifice of Ismail', url: 'https://www.youtube.com/results?search_query=sacrifice+Ismail+Ibrahim' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['2:125-129', '14:37', '19:54-55', '37:99-107']
        }
      },
      {
        id: 9,
                  name: 'Isaac',
                  arabicName: 'إسحاق',
                  era: '2066 BCE - 1985 BCE (approx.)',
        lifeSpan: '180 years',
        description: 'Son of Abraham and Sarah. Father of Jacob. Prophet to the people of Canaan.',
        locationSent: 'Canaan',
        majorEvents: ['Birth in old age of parents', 'Carrier of prophecy lineage'],
        parentIds: [6],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ishaq (Isaac)', url: 'https://www.youtube.com/results?search_query=Prophet+Ishaq+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['11:71', '19:49', '21:72', '37:112-113']
        }
      },
      {
        id: 10,
                      name: 'Jacob',
                      arabicName: 'يعقوب',
                      era: '2006 BCE - 1859 BCE (approx.)',
        lifeSpan: '147 years',
        description: 'Also known as Israel. Son of Isaac. Father of Joseph and eleven other sons who became the twelve tribes of Israel. Known for his patience during the loss of Joseph.',
        locationSent: 'Canaan',
        tribe: 'Bani Israel (Children of Israel)',
        majorEvents: ['Loss and reunion with Joseph', 'Migration to Egypt', 'Father of twelve tribes'],
        miracles: ['Regained sight when Joseph\'s shirt was brought'],
        parentIds: [9],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ya\'qub (Jacob)', url: 'https://www.youtube.com/results?search_query=Prophet+Yaqub+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['12:4-101', '19:49', '21:72']
        }
      },
      {
        id: 11,
                          name: 'Joseph',
                          arabicName: 'يوسف',
                          era: '1745 BCE - 1635 BCE (approx.)',
        lifeSpan: '110 years',
        description: 'Son of Jacob. Known for his exceptional beauty, patience (sabr), and dream interpretation. Became a ruler in Egypt after years of trials.',
        locationSent: 'Egypt',
        majorEvents: ['Thrown into well by brothers', 'Sold as slave', 'Falsely imprisoned', 'Interpreted king\'s dream', 'Became treasurer of Egypt', 'Reunited with family'],
        miracles: ['Gift of dream interpretation', 'Rise from slave to ruler'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Yusuf - Complete', url: 'https://www.youtube.com/results?search_query=Prophet+Yusuf+story+complete', creator: 'Bayyinah Institute' },
            { title: 'Surah Yusuf Explanation', url: 'https://www.youtube.com/results?search_query=Surah+Yusuf+tafsir' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Lessons from Surah Yusuf', author: 'Yasir Qadhi' }
          ],
          quranRefs: ['12:1-111 (Entire Surah)']
        }
      },
      {
        id: 12,
        name: 'Shuayb',
        arabicName: 'شعيب',
        era: 'Ancient Times',
        description: 'Sent to the people of Madyan. Warned against cheating in business and weights. Known as the speaker/orator among prophets.',
        locationSent: 'Madyan (Northwest Arabia)',
        tribe: 'Madyan',
        majorEvents: ['Preached against fraud in trade', 'Destruction of his people by earthquake'],
        miracles: ['Saved from earthquake'],
        parentIds: [6],
        resources: {
          videos: [
            { title: 'The Story of Prophet Shuayb', url: 'https://www.youtube.com/results?search_query=Prophet+Shuayb+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['7:85-93', '11:84-95', '26:176-191']
        }
      },
      {
        id: 13,
        name: 'Job',
        arabicName: 'أيوب',
        era: 'Ancient Times',
        description: 'Known for his immense patience and faith during severe trials. Lost his wealth, children, and health but never lost faith in Allah.',
        locationSent: 'Land of Uz',
        majorEvents: ['Tested with loss of wealth and health', 'Remained patient', 'Restored by Allah'],
        miracles: ['Healed completely by striking ground with foot', 'Wealth and family restored'],
        parentIds: [9],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ayyub (Job)', url: 'https://www.youtube.com/results?search_query=Prophet+Ayyub+patience', creator: 'Merciful Servant' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Patience and Gratitude', author: 'Ibn Qayyim al-Jawziyya' }
          ],
          quranRefs: ['21:83-84', '38:41-44']
        }
      },
      {
        id: 14,
        name: 'Dhul-Kifl',
        arabicName: 'ذو الكفل',
        era: 'Ancient Times',
        description: 'A prophet known for his patience and righteousness. Mentioned alongside other patient prophets in the Quran.',
        locationSent: 'Unknown',
        majorEvents: ['Known for keeping his promises', 'Example of patience'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Dhul-Kifl', url: 'https://www.youtube.com/results?search_query=Prophet+Dhul+Kifl' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['21:85-86', '38:48']
        }
      },
      {
        id: 15,
        name: 'Moses',
        arabicName: 'موسى',
        era: '1391 BCE - 1271 BCE (approx.)',
        lifeSpan: '120 years',
        scripture: 'Torah (Tawrat)',
        description: 'One of the greatest prophets. Given the Torah. Led the Children of Israel out of Egypt. Spoke directly with Allah on Mount Sinai. Most mentioned prophet in the Quran.',
        locationSent: 'Egypt, Mount Sinai, Wilderness',
        tribe: 'Bani Israel',
        majorEvents: ['Saved from Pharaoh as infant', 'Burning bush revelation', 'Nine clear signs', 'Parting of Red Sea', 'Receiving the Torah', 'Forty days on Mount Sinai'],
        miracles: ['Staff turning into serpent', 'White hand', 'Parting of Red Sea', 'Water from rock', 'Spoke with Allah'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Musa - Complete Series', url: 'https://www.youtube.com/results?search_query=Prophet+Musa+story+complete', creator: 'Islamic Guidance' },
            { title: 'Moses and Pharaoh', url: 'https://www.youtube.com/results?search_query=Musa+Pharaoh+Quran' },
            { title: 'Moses and Khidr', url: 'https://www.youtube.com/results?search_query=Moses+Khidr+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Moses: A Prophet for All Times', author: 'Various Islamic Scholars' }
          ],
          quranRefs: ['20:9-98', '28:3-43', '7:103-162', '26:10-68', '18:60-82']
        }
      },
      {
        id: 16,
        name: 'Aaron',
        arabicName: 'هارون',
        era: '1394 BCE - 1274 BCE (approx.)',
        description: 'Brother of Moses. Helped Moses in his mission to Pharaoh. Known for his eloquence. High priest of the Children of Israel.',
        locationSent: 'Egypt, Wilderness',
        tribe: 'Bani Israel (Levite)',
        majorEvents: ['Assisted Moses before Pharaoh', 'Stayed with people while Moses was on Mount Sinai', 'Golden calf incident'],
        miracles: ['Shared in the miracles with Moses'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Harun (Aaron)', url: 'https://www.youtube.com/results?search_query=Prophet+Harun+Aaron' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['19:53', '20:29-36', '7:142', '25:35']
        }
      },
      {
        id: 17,
        name: 'David',
        arabicName: 'داود',
        era: '1040 BCE - 970 BCE (approx.)',
        lifeSpan: '70 years',
        scripture: 'Psalms (Zabur)',
        description: 'King and prophet of Israel. Given the Psalms (Zabur). Killed Goliath. Had a beautiful voice in worship. Could soften iron with his hands.',
        locationSent: 'Jerusalem, Israel',
        tribe: 'Bani Israel',
        majorEvents: ['Defeated Goliath as youth', 'Became king', 'Built Jerusalem as capital', 'Received Psalms'],
        miracles: ['Iron became soft in his hands', 'Birds and mountains praised with him', 'Beautiful voice'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Dawud (David)', url: 'https://www.youtube.com/results?search_query=Prophet+Dawud+story', creator: 'One Islam' },
            { title: 'David and Goliath - Islamic Perspective', url: 'https://www.youtube.com/results?search_query=Dawud+Goliath+Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['2:251', '21:78-80', '27:15-16', '34:10-11', '38:17-26']
        }
      },
      {
        id: 18,
        name: 'Solomon',
        arabicName: 'سليمان',
        era: '990 BCE - 931 BCE (approx.)',
        lifeSpan: '52 years',
        description: 'Son of David. Prophet and king. Given kingdom like no other. Could command the wind, understand animal speech, and control jinn. Built the first Temple.',
        locationSent: 'Jerusalem, Israel',
        tribe: 'Bani Israel',
        majorEvents: ['Inherited David\'s kingdom', 'Built the Temple', 'Queen of Sheba\'s visit', 'Commanded jinn and animals'],
        miracles: ['Understood language of birds and animals', 'Commanded the wind', 'Controlled jinn', 'Throne of Queen of Sheba brought instantly'],
        parentIds: [17],
        resources: {
          videos: [
            { title: 'The Story of Prophet Sulaiman (Solomon)', url: 'https://www.youtube.com/results?search_query=Prophet+Sulaiman+story', creator: 'Islamic Guidance' },
            { title: 'Solomon and the Queen of Sheba', url: 'https://www.youtube.com/results?search_query=Sulaiman+Queen+Sheba' },
            { title: 'Solomon and the Hoopoe Bird', url: 'https://www.youtube.com/results?search_query=Sulaiman+hoopoe' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['27:15-44', '34:12-14', '38:30-40', '21:78-82']
        }
      },
      {
        id: 19,
        name: 'Elijah',
        arabicName: 'إلياس',
        era: '9th century BCE',
        description: 'Sent to the Children of Israel. Preached against the worship of Baal. Known for his courage.',
        locationSent: 'Kingdom of Israel',
        tribe: 'Bani Israel',
        majorEvents: ['Fought against Baal worship', 'Challenged false prophets'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Ilyas (Elijah)', url: 'https://www.youtube.com/results?search_query=Prophet+Ilyas+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['6:85', '37:123-132']
        }
      },
      {
        id: 20,
        name: 'Elisha',
        arabicName: 'اليسع',
        era: '9th century BCE',
        description: 'Successor of Elijah. Continued preaching to the Children of Israel.',
        locationSent: 'Kingdom of Israel',
        tribe: 'Bani Israel',
        majorEvents: ['Succeeded Elijah', 'Continued mission against idolatry'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Al-Yasa (Elisha)', url: 'https://www.youtube.com/results?search_query=Prophet+Alyasa' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['6:86', '38:48']
        }
      },
      {
        id: 21,
        name: 'Jonah',
        arabicName: 'يونس',
        era: '8th century BCE',
        description: 'Sent to the people of Nineveh. Swallowed by a whale after leaving his mission. Made repentance and was saved. His people believed and were saved.',
        locationSent: 'Nineveh (modern-day Iraq)',
        majorEvents: ['Left his people in anger', 'Swallowed by whale', 'Made supplication in darkness', 'Returned to his people who had believed'],
        miracles: ['Survived inside whale', 'His entire city believed and was saved'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Yunus (Jonah)', url: 'https://www.youtube.com/results?search_query=Prophet+Yunus+whale+story', creator: 'Merciful Servant' },
            { title: 'Jonah and the Whale', url: 'https://www.youtube.com/results?search_query=Yunus+whale+Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Don\'t Be Sad', author: 'Aaidh ibn Abdullah al-Qarni' }
          ],
          quranRefs: ['37:139-148', '21:87-88', '10:98', '68:48-50']
        }
      },
      {
        id: 22,
        name: 'Zechariah',
        arabicName: 'زكريا',
        era: '1st century BCE',
        description: 'Guardian of Mary (mother of Jesus). Given a son (John) in old age. Known for his devotion and prayers.',
        locationSent: 'Jerusalem',
        tribe: 'Bani Israel',
        majorEvents: ['Guardian of Mary', 'Prayed for offspring in old age', 'Birth of John despite old age'],
        miracles: ['Given son in old age', 'Unable to speak for three days as a sign'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Zakariya (Zechariah)', url: 'https://www.youtube.com/results?search_query=Prophet+Zakariya+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['3:37-41', '19:2-11', '21:89-90']
        }
      },
      {
        id: 23,
        name: 'John',
        arabicName: 'يحيى',
        era: '1st century CE',
        description: 'Son of Zechariah. Known as John the Baptist. Confirmed the word of Jesus. Known for his wisdom from childhood and chastity.',
        locationSent: 'Palestine',
        tribe: 'Bani Israel',
        majorEvents: ['Given wisdom as a child', 'Confirmed Jesus\' message', 'Known for piety and devotion'],
        miracles: ['Born to elderly parents', 'Given wisdom as a child'],
        parentIds: [22],
        resources: {
          videos: [
            { title: 'The Story of Prophet Yahya (John)', url: 'https://www.youtube.com/results?search_query=Prophet+Yahya+story' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' }
          ],
          quranRefs: ['3:39', '19:12-15', '21:90']
        }
      },
      {
        id: 24,
        name: 'Jesus',
        arabicName: 'عيسى',
        era: '4 BCE - 30 CE (approx.)',
        scripture: 'Gospel (Injil)',
        description: 'Son of Mary, born miraculously without father. Given the Gospel (Injil). Performed many miracles. Will return before the Day of Judgment. Not divine but a messenger of Allah.',
        locationSent: 'Palestine, Israel',
        tribe: 'Bani Israel',
        majorEvents: ['Miraculous birth', 'Spoke from cradle', 'Ministry with many miracles', 'Raised to heaven', 'Will return before end times'],
        miracles: ['Born without father', 'Spoke as infant', 'Healed blind and leper', 'Brought dead to life', 'Created bird from clay', 'Table spread from heaven', 'Raised to heaven alive'],
        parentIds: [10],
        resources: {
          videos: [
            { title: 'The Story of Prophet Isa (Jesus) in Islam', url: 'https://www.youtube.com/results?search_query=Prophet+Isa+Jesus+Islam', creator: 'Islamic Guidance' },
            { title: 'Jesus in the Quran', url: 'https://www.youtube.com/results?search_query=Jesus+Quran+Islamic', creator: 'One Islam' },
            { title: 'The Miracles of Jesus in Islam', url: 'https://www.youtube.com/results?search_query=Isa+miracles+Islam' }
          ],
          books: [
            { title: 'Stories of the Prophets', author: 'Ibn Kathir' },
            { title: 'Jesus: Prophet of Islam', author: 'Muhammad Ata ur-Rahim' }
          ],
          quranRefs: ['3:45-55', '5:110-115', '19:16-36', '4:157-159']
        }
      },
      {
        id: 25,
        name: 'Muhammad',
        arabicName: 'محمد ﷺ',
        era: '570 CE - 632 CE',
        lifeSpan: '63 years',
        scripture: 'Quran (القرآن)',
        description: 'The final prophet and messenger of Allah. Given the Quran. Seal of the Prophets. Known as Al-Amin (The Trustworthy) even before prophethood. Established Islam and united Arabia.',
        locationSent: 'Mecca and Medina (all of humanity)',
        tribe: 'Quraysh (descendant of Ishmael)',
        majorEvents: [
          'Revelation in Cave Hira',
          'Migration (Hijrah) to Medina',
          'Battle of Badr, Uhud, Trench',
          'Treaty of Hudaybiyyah',
          'Conquest of Mecca',
          'Farewell Pilgrimage',
          'Night Journey (Isra and Mi\'raj)'
        ],
        miracles: [
          'The Quran itself (greatest miracle)',
          'Splitting of the moon',
          'Night Journey to Jerusalem and ascension to heavens',
          'Water flowing from his fingers',
          'Small amount of food feeding many',
          'Prophecies that came true'
        ],
        parentIds: [8],
        resources: {
          videos: [
            { title: 'The Life of Prophet Muhammad ﷺ - Complete Seerah', url: 'https://www.youtube.com/results?search_query=Prophet+Muhammad+life+complete+seerah', creator: 'Yasir Qadhi' },
            { title: 'Muhammad ﷺ - The Last Prophet', url: 'https://www.youtube.com/results?search_query=Muhammad+last+prophet+documentary', creator: 'Islamic Reminders' },
            { title: 'The Seerah Series', url: 'https://www.youtube.com/results?search_query=seerah+series+Muhammad', creator: 'Bayyinah TV' },
            { title: 'Miracles of Prophet Muhammad', url: 'https://www.youtube.com/results?search_query=miracles+prophet+Muhammad' }
          ],
          books: [
            { title: 'The Sealed Nectar (Ar-Raheeq Al-Makhtum)', author: 'Safi-ur-Rahman al-Mubarakpuri', description: 'Award-winning biography of the Prophet' },
            { title: 'In the Footsteps of the Prophet', author: 'Tariq Ramadan' },
            { title: 'Muhammad: His Life Based on the Earliest Sources', author: 'Martin Lings' },
            { title: 'The Life of the Prophet Muhammad', author: 'Ibn Kathir' }
          ],
          quranRefs: ['33:40', '48:29', '68:4', '21:107', '3:144']
        }
      }
    ];

    // Define relationships between prophets (genealogical and historical)
    const relationships: ProphetRelationship[] = [
      // From Adam
      { from: 1, to: 2, type: 'descendant' },
      { from: 1, to: 3, type: 'descendant' },
      
      // From Noah
      { from: 3, to: 4, type: 'descendant' },
      { from: 3, to: 5, type: 'descendant' },
      { from: 3, to: 6, type: 'descendant' },
      
      // From Abraham
      { from: 3, to: 7, type: 'descendant' }, // Lot was nephew
      { from: 6, to: 8, type: 'descendant' },    // Ishmael
      { from: 6, to: 9, type: 'descendant' },    // Isaac
      { from: 6, to: 12, type: 'descendant' },   // Shuayb (some traditions)
      
      // Ishmael's line (Arab prophets)
      { from: 8, to: 25, type: 'lineage' },      // To Muhammad ﷺ
      
      // Isaac's line
      { from: 9, to: 10, type: 'descendant' },   // Isaac to Jacob
      { from: 9, to: 13, type: 'descendant' },   // To Job (some traditions)
      
      // Jacob's line (Bani Israel)
      { from: 10, to: 11, type: 'descendant' },  // Jacob to Joseph
      { from: 10, to: 14, type: 'contemporary' },  // To Dhul-Kifl
      { from: 10, to: 15, type: 'descendant' },  // To Moses
      { from: 10, to: 16, type: 'descendant' },  // To Aaron
      { from: 10, to: 17, type: 'descendant' },  // To David
      { from: 10, to: 19, type: 'descendant' },  // To Elijah
      { from: 10, to: 20, type: 'descendant' },  // To Elisha
      { from: 10, to: 21, type: 'descendant' },  // To Jonah
      { from: 10, to: 22, type: 'descendant' },  // To Zechariah
      { from: 10, to: 24, type: 'descendant' },  // To Jesus
      
      // David's line
      { from: 17, to: 18, type: 'descendant' },  // David to Solomon
      
      // Zechariah's line
      { from: 22, to: 23, type: 'descendant' },  // Zechariah to John
      
      // Contemporaries
      { from: 15, to: 16, type: 'contemporary' }, // Moses and Aaron (brothers)
      { from: 19, to: 20, type: 'contemporary' }, // Elijah and Elisha
      { from: 22, to: 24, type: 'contemporary' }, // Zechariah and Jesus
      { from: 23, to: 24, type: 'contemporary' }  // John and Jesus
    ];

    return { prophets, relationships };
  }

  /**
   * Get all prophets and relationships
   */
  getProphetData(): ProphetData {
    return this.prophetData;
  }

  /**
   * Get all prophets as array
   */
  getAllProphets(): Prophet[] {
    return this.prophetData.prophets;
  }

  /**
   * Get prophet by ID
   */
  getProphetById(id: number): Prophet | undefined {
    return this.prophetData.prophets.find(p => p.id === id);
  }

  /**
   * Get relationships for a specific prophet
   */
  getProphetRelationships(id: number): ProphetRelationship[] {
    return this.prophetData.relationships.filter(r => r.from === id || r.to === id);
  }

  /**
   * Get children/descendants of a prophet
   */
  getDescendants(id: number): Prophet[] {
    const descendantIds = this.prophetData.relationships
      .filter(r => r.from === id && (r.type === 'descendant' || r.type === 'lineage'))
      .map(r => r.to);
    
    return this.prophetData.prophets.filter(p => descendantIds.includes(p.id));
  }

  /**
   * Get ancestors of a prophet
   */
  getAncestors(id: number): Prophet[] {
    const ancestorIds = this.prophetData.relationships
      .filter(r => r.to === id && (r.type === 'descendant' || r.type === 'lineage'))
      .map(r => r.from);
    
    return this.prophetData.prophets.filter(p => ancestorIds.includes(p.id));
  }

  /**
   * Build hierarchical tree from flat structure (for backward compatibility)
   */
  getProphetTree(): Prophet {
    const prophets = this.prophetData.prophets;
    const relationships = this.prophetData.relationships;
    
    // Create a map of prophets
    const prophetMap = new Map<number, Prophet>();
    prophets.forEach(p => {
      prophetMap.set(p.id, { ...p, children: [] });
    });
    
    // Build tree structure
    relationships.forEach(rel => {
      if (rel.type === 'descendant') {
        const parent = prophetMap.get(rel.from);
        const child = prophetMap.get(rel.to);
        if (parent && child && parent.children) {
          parent.children.push(child);
        }
      }
    });
    
    // Return Adam as root
    return prophetMap.get(1)!;
  }

  /**
   * Get prophets by lineage (Ishmael or Isaac)
   */
  getProphetsByLineage(lineage: 'ishmael' | 'isaac'): Prophet[] {
    const rootId = lineage === 'ishmael' ? 8 : 9;
    const lineageIds = new Set<number>([rootId]);
    
    // Recursively find all descendants
    const findDescendants = (id: number) => {
      this.prophetData.relationships
        .filter(r => r.from === id && r.type !== 'contemporary')
        .forEach(r => {
          lineageIds.add(r.to);
          findDescendants(r.to);
        });
    };
    
    findDescendants(rootId);
    return this.prophetData.prophets.filter(p => lineageIds.has(p.id));
  }

  /**
   * Search prophets by name (English or Arabic)
   */
  searchProphets(query: string): Prophet[] {
    const lowerQuery = query.toLowerCase();
    return this.prophetData.prophets.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.arabicName.includes(query)
    );
  }
}
