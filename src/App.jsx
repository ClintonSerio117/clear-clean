import { useState, useEffect } from 'react'
import './App.css'
import clintonSerioLogo from './assets/clinton-serio-logo.png'
import dynamicBackground from './assets/dynamic-spiritual-background.jpg'
import flameIcon from './assets/flame-icon.png'
import PaymentGateway from './PaymentGateway'
import AccessRequest from './AccessRequest';
import AccessRequest from './pages/AccessRequest';

function App() {
  const [currentView, setCurrentView] = useState('armour'); // already there  const [currentView, setCurrentView] = useState('armour') // 'armour', 'payment', 'workshop', 'blessing'
  const [armourProgress, setArmourProgress] = useState({ morning: false, afternoon: false, evening: false })
  const [currentDay, setCurrentDay] = useState(1)
  const [completedDays, setCompletedDays] = useState(new Set())
  const [userEmail, setUserEmail] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [showPayment, setShowPayment] = useState(false)
  const [userData, setUserData] = useState(null)

  // Check for existing access on component mount
  useEffect(() => {
    const savedAccess = localStorage.getItem('clintonSerioWorkshopAccess')
    if (savedAccess) {
      const data = JSON.parse(savedAccess)
      setUserData(data)
      setUserEmail(data.email)
      setAccessCode(data.accessCode)
    }
  }, [])

  // Always show the Continue to Workshop button (removed completion dependency)
  const isArmourComplete = true

  const handlePaymentSuccess = (paymentData) => {
    setUserData(paymentData)
    setUserEmail(paymentData.email)
    setAccessCode(paymentData.accessCode)
    setShowPayment(false)
    setCurrentView('workshop')
  }

  // Armour of Light Content
  const armourContent = {
    morning: {
      title: "Morning Activation - The Inner Sanctuary",
      duration: "5-7 minutes",
      purpose: "To quiet the external noise, anchor your presence, and prepare your energetic field for deep transformation.",
      steps: [
        {
          title: "The Silent Flame Ceremony",
          instruction: "Find a quiet space. Light a small candle consciously. Gaze softly into the flame's center. Take three deep, slow breaths: inhale through your nose, exhale gently from your mouth.",
          why: "The flame acts as a powerful visual anchor, focusing your attention and helping to still the mind. This conscious focus helps synchronize your brainwaves, creating a coherent state that makes your energetic field more receptive to transformation.",
          visualization: "As you breathe, visualize a beautiful, golden light spiraling upward from the base of your spine. See it dissolving any tension, any blockages, any mental clutter as it ascends through your entire body, clearing your internal pathway."
        },
        {
          title: "The 'Banana' Detox & Verbal Release",
          instruction: "Still gazing at the flame, clearly and out loud, state 2-3 specific 'bananas' – beliefs, fears, emotions, or even people – that have been disturbing your inner peace. Own them. Confront them directly.",
          why: "This is about externalizing internal narratives. By vocalizing these 'energy snags,' you're bringing them from the subconscious into conscious awareness. This act of naming and claiming them is the first step to detaching their energetic grip."
        }
      ]
    },
    afternoon: {
      title: "Midday Reset - The Quantum Field",
      duration: "15-20 minutes",
      purpose: "To consciously construct a powerful, resilient energetic shield that protects and amplifies your sovereign essence.",
      steps: [
        {
          title: "Rooting & Rising (Somatic Energy Activation)",
          instruction: "Stand barefoot on the earth if possible, or firmly on the floor. Close your eyes, take three deep breaths, feeling your feet rooted. Place your hands on your stomach. As you inhale, feel the golden light starting from your feet, drawing up energy from the earth. As you exhale, push that light upwards through your core. Repeat three times.",
          why: "Grounding anchors your physical and energetic body to the Earth's stable frequency. This deep somatic breathing and visualization intentionally changes the electromagnetic frequency of your body. You're actively pulling in vital life force and circulating it, creating a coherent biofield that repels discordant energies."
        },
        {
          title: "The Golden Ascent & Sovereign Declaration",
          instruction: "Continue to visualize that golden light spiraling upward, consciously moving it through your ankles, knees, hips, core, heart (feel it expanding with clarity and resilience), throat (feel it radiating truth and authenticity), third eye (feel it activating intuition), and finally, expanding out from your crown into a magnificent, protective golden triangle above and around you.",
          affirmation: "I am protected by divine light. My energy is sovereign. I am the creator of my life. Nobody and nothing has power over me. I am in control."
        },
        {
          title: "The Fire & Freedom Ceremony",
          instruction: "Have two small pieces of paper and a fireproof dish ready. On one paper, write down the 'bananas' you vocalized earlier, or any other burdens, fears, or negativity – this is your 'Release' Letter. Burn it safely, watching the smoke rise. On the second paper, write down the freedoms you claim, your strengths, your gratitude – this is your 'Gratitude' Letter. Burn this safely too, observing the smoke.",
          why: "This ritual is a potent act of energetic release and intentional creation. The act of burning provides a powerful visual and energetic symbol of transmutation. The rising smoke symbolizes your new energetic blueprint being sent into the quantum field."
        }
      ]
    },
    evening: {
      title: "Evening Seal - The Mirror & The Mantra",
      duration: "10-15 minutes",
      purpose: "To hardwire these new energetic patterns and provide practical tools for consistent self-mastery.",
      steps: [
        {
          title: "The Mirror of Life - Reflection & Reframe",
          instruction: "After your shower/bath, step out, face the mirror. Look yourself in the eyes. This isn't just a reflection of your physical body; it's a mirror of your energy. Remember, the universe is always reflecting your broadcast.",
          affirmation: "I am clean, clear, and fiercely protected. My mind is calm, my energy clear, my spirit resilient."
        },
        {
          title: "Space Cleansing & Energetic Seal",
          instruction: "Briefly sage around yourself, or simply sprinkle a pinch of salt (sea salt preferred) around your immediate space, creating a small circle. This is about sealing your energetic field and your physical space from external interference.",
          purpose: "Salt and sage have long been used to disrupt stagnant energy patterns and create a clear energetic boundary. This reinforces the 'container' you've just created."
        },
        {
          title: "Evening Integration & Unbreakable Seal",
          instruction: "Before bed, sit quietly, take three deep breaths, and smile softly, anchoring gratitude and calm. End your day strong.",
          affirmation: "My Armour never leaves me. Fear dissolves in the light. I am the undisputed sovereign of my energetic kingdom."
        }
      ]
    }
  }

  const workshopData = [
    {
      id: 1,
      title: 'Energy Field Awareness & Connection',
      quote: 'You can\'t clean what you can\'t see.',
      introduction: 'Your personal energy field is not an abstract idea—it\'s the invisible forcefield constantly interacting with your environment. Just as you wouldn\'t ignore physical dirt on your body, you shouldn\'t ignore the energetic clutter in your field. Awareness is the first step toward reclaiming your power.',
      clintonism: 'Ignorance isn\'t bliss—it\'s blindness. Awareness is the awakening.',
      content: [
        'Your energy field, often called an "aura," is a multi-layered energetic atmosphere surrounding your physical body. Think of it as the weather system around your inner world, responding constantly to internal emotions, external interactions, and subtle influences. Like weather patterns, your aura can be clear or stormy, calm or chaotic, vibrant or dulled.',
        'Imagine your energy field as a finely tuned instrument. When it\'s out of tune, everything sounds off-key—your emotions, your relationships, even your physical health. Tuning into your energy is the key to re-harmonizing your life.',
        'Your energy field isn\'t spiritual decoration. It\'s essential architecture.'
      ],
      signs: [
        'Feeling emotionally or physically drained, even after rest',
        'Overwhelming sensations or unexplained anxiety',
        'Difficulty focusing, feeling scattered, or unclear',
        'Persistent negativity or a sense of being "stuck"'
      ],
      practice: [
        'Find a quiet, comfortable place and close your eyes.',
        'Take five deep, slow breaths. Visualize your breath filling your entire body and flowing gently into the area around your body.',
        'With each breath, visualize your energy field clearly. Notice its size, color, and texture. Observe without judgment.',
        'Identify any areas that feel heavy, dark, or tense. Breathe into these areas, allowing them to soften and release slightly.',
        'Repeat out loud or silently to yourself: "I reclaim awareness of my energy. My field is mine alone."'
      ],
      reflection: [
        'What emotions or sensations came up during your energy check-in?',
        'Who or what seems to influence your energy field the most?',
        'What would your life feel like if your energy field was consistently clear and vibrant?'
      ],
      commitment: [
        'Perform this energy check-in practice twice today.',
        'Notice and document any shifts or insights in your journal.',
        'You\'ve officially begun Blessing Week. Welcome to your energetic awakening.'
      ],
      pdfLink: '/assets/Day1_EnergyFieldAwareness.pdf'
    },
    {
      id: 2,
      title: 'Space Clearing',
      quote: 'Your environment is your extended nervous system.',
      introduction: 'The spaces you inhabit hold energy—both positive and negative. Every argument, celebration, worry, and joy leaves an energetic imprint. Today, you reclaim your physical environment as a sanctuary that supports your highest good.',
      clintonism: 'You can\'t rise in a space that\'s designed to keep you down.',
      content: [
        'Space clearing is the practice of removing stagnant, negative, or chaotic energy from your physical environment. Think of it as energetic housekeeping—just as you clean dust and dirt from surfaces, you can clear energetic residue from rooms.',
        'Every space has a "feeling" to it. You\'ve walked into rooms that felt heavy, uncomfortable, or draining, and others that felt light, peaceful, or inspiring. This isn\'t coincidence—it\'s energy.',
        'Your home should be your sanctuary, not your prison. Clear the energy, reclaim the space.'
      ],
      signs: [
        'Feeling restless or uncomfortable in certain rooms',
        'Difficulty sleeping or relaxing at home',
        'Frequent arguments or tension in specific areas',
        'Spaces that feel "heavy" or oppressive'
      ],
      practice: [
        'Choose one room to focus on today—preferably your bedroom or main living space.',
        'Open all windows and doors to create airflow. Light a white candle or burn sage/incense.',
        'Walk clockwise around the room, stating aloud: "I clear all negative energy from this space. Only love and light remain."',
        'Clap your hands loudly in each corner of the room to break up stagnant energy.',
        'Visualize bright white light filling every corner, pushing out any darkness or heaviness.',
        'Close by saying: "This space is now blessed and protected. It serves my highest good."'
      ],
      reflection: [
        'How did the room feel before and after the clearing?',
        'Which areas of your home feel most in need of energetic attention?',
        'What would it mean for your daily life if every space you inhabited supported your well-being?'
      ],
      commitment: [
        'Complete the space clearing ritual for your chosen room.',
        'Notice any changes in how you feel in that space over the next 24 hours.',
        'Consider which room you\'ll clear tomorrow.'
      ],
      pdfLink: '/assets/Day2_SpaceClearing.pdf'
    },
    {
      id: 3,
      title: 'Energy Cord Cutting & Detachment',
      quote: 'What you don\'t release will continue to drain you.',
      introduction: 'Energetic cords are invisible connections between you and other people, places, or experiences. While some cords are healthy and life-giving, others are parasitic—draining your energy and keeping you stuck in old patterns. Today, you learn to cut what no longer serves.',
      clintonism: 'You can\'t move forward while you\'re still plugged into the past.',
      content: [
        'Energetic cords form naturally through emotional connections. Every relationship, every intense experience, every place you\'ve lived creates these invisible threads. Healthy cords nourish both parties. Toxic cords drain one to feed the other.',
        'Cord cutting isn\'t about ending relationships—it\'s about ending unhealthy energetic exchanges. You can love someone and still cut the cord that allows them to drain your energy.',
        'Freedom isn\'t selfish. It\'s necessary.'
      ],
      signs: [
        'Thinking obsessively about someone who hurt you',
        'Feeling drained after certain phone calls or interactions',
        'Unable to move on from past relationships or situations',
        'Feeling someone else\'s emotions as if they were your own'
      ],
      practice: [
        'Sit quietly and bring to mind someone or something that feels draining or stuck.',
        'Visualize a cord of light connecting you to this person/situation. Notice its color, thickness, and where it attaches to your body.',
        'Call upon Archangel Michael or your highest spiritual guidance for assistance.',
        'Visualize a sword of light cutting through the cord cleanly and completely.',
        'See the cord dissolving into light, returning any energy that belongs to you and releasing what belongs to them.',
        'Seal your energy field with protective white light and state: "I am free. I am whole. I am protected."'
      ],
      reflection: [
        'Which relationships or situations feel most draining in your life?',
        'What would change if you were no longer energetically attached to past hurts?',
        'How can you maintain healthy boundaries while still being loving and open?'
      ],
      commitment: [
        'Practice cord cutting with at least one draining connection today.',
        'Notice any shifts in your thoughts or feelings about that person/situation.',
        'Set an intention to maintain healthy energetic boundaries going forward.'
      ],
      pdfLink: '/assets/Day3_EnergyCordCutting.pdf'
    },
    {
      id: 4,
      title: 'Energy Field Clearing & Purification',
      quote: 'Purity isn\'t perfection. It\'s clarity.',
      introduction: 'Your energy field accumulates debris daily—other people\'s emotions, environmental toxins, your own negative thoughts. Like a filter that needs regular cleaning, your aura requires intentional purification to function at its highest capacity.',
      clintonism: 'You wouldn\'t wear dirty clothes. Don\'t wear dirty energy.',
      content: [
        'Energy field purification is like taking a shower for your soul. Throughout each day, your aura picks up energetic "dirt"—stress from traffic, anxiety from news, frustration from work, other people\'s moods and problems.',
        'Most people go years without consciously cleaning their energy field, then wonder why they feel heavy, confused, or emotionally unstable. Regular energetic hygiene is as important as physical hygiene.',
        'Clean energy thinks clearly. Dirty energy spirals endlessly.'
      ],
      signs: [
        'Feeling "off" without knowing why',
        'Absorbing other people\'s moods easily',
        'Mental fog or confusion',
        'Feeling energetically "sticky" or heavy'
      ],
      practice: [
        'Stand in a shower or bath, or visualize yourself under a waterfall of pure white light.',
        'As the water flows over you, imagine it washing away all energetic debris—stress, negativity, other people\'s energy.',
        'Visualize the dirty energy flowing down the drain and being transmuted into light.',
        'Call in violet flame energy to burn away any remaining impurities in your field.',
        'See yourself surrounded by a bubble of pure, clear light that protects and maintains your energetic cleanliness.',
        'State: "I am energetically pure. I am clear. I am protected."'
      ],
      reflection: [
        'When do you feel most energetically "dirty" or heavy?',
        'What daily practices could help you maintain energetic cleanliness?',
        'How would your life change if you felt energetically clear and pure most of the time?'
      ],
      commitment: [
        'Complete the energy field purification practice.',
        'Pay attention to how you feel before and after the practice.',
        'Consider making this a daily practice, especially after challenging days.'
      ],
      pdfLink: '/assets/Day4_EnergyFieldClearing.pdf'
    },
    {
      id: 5,
      title: 'Blessing & Charging',
      quote: 'What you bless multiplies. What you curse diminishes.',
      introduction: 'Blessing is the conscious direction of love, gratitude, and positive intention toward yourself, others, and your environment. It\'s not religious—it\'s energetic. When you bless, you charge your field with high-frequency energy that attracts more of the same.',
      clintonism: 'Blessing isn\'t about being nice. It\'s about being powerful.',
      content: [
        'Blessing is one of the most powerful tools for raising your vibration and transforming your reality. When you consciously send love and appreciation to someone or something, you create an energetic bridge that benefits both giver and receiver.',
        'Your words carry energy. Your intentions carry power. When you bless, you become a conduit for divine energy to flow through you into the world.',
        'What you focus on expands. Bless what you want more of.'
      ],
      signs: [
        'Feeling grateful and appreciative',
        'Wanting to share positive energy with others',
        'Recognizing the good in challenging situations',
        'Feeling connected to something greater than yourself'
      ],
      practice: [
        'Begin by blessing yourself: "I bless my body, my mind, my spirit. I am worthy of love and abundance."',
        'Bless your home: "I bless this space. May it be filled with peace, love, and protection."',
        'Bless your relationships: "I bless all my relationships. May they be harmonious and mutually beneficial."',
        'Bless your challenges: "I bless my difficulties. May they teach me and make me stronger."',
        'Bless your future: "I bless my path ahead. May it unfold with grace and divine timing."',
        'End by blessing the world: "I bless this planet and all beings upon it. May all be happy, healthy, and free."'
      ],
      reflection: [
        'What in your life feels most in need of blessing?',
        'How does it feel to consciously send love and appreciation?',
        'What would happen if you made blessing a daily practice?'
      ],
      commitment: [
        'Complete the full blessing practice.',
        'Choose three things to bless spontaneously throughout the day.',
        'Notice how blessing affects your mood and energy levels.'
      ],
      pdfLink: '/assets/Day5_BlessingCharging.pdf'
    },
    {
      id: 6,
      title: 'Energy Field Protection & Armour of Light',
      quote: 'Protection isn\'t paranoia. It\'s preparation.',
      introduction: 'Spiritual protection isn\'t about fear—it\'s about wisdom. Just as you lock your car and wear a seatbelt, energetic protection is a practical precaution that allows you to move through the world with confidence and clarity.',
      clintonism: 'You don\'t need armor because you\'re weak. You need it because you\'re worth protecting.',
      content: [
        'Energetic protection creates a buffer between your energy field and external influences that might drain, confuse, or harm you. It\'s not about building walls—it\'s about creating healthy boundaries.',
        'The Armour of Light is a visualization technique that surrounds you with divine protection. It allows positive energy to flow freely while deflecting negativity.',
        'Strong boundaries create safe spaces for authentic connection.'
      ],
      signs: [
        'Feeling confident and secure in your energy',
        'Maintaining clarity in chaotic environments',
        'Feeling protected and guided',
        'Bouncing back quickly from negative encounters'
      ],
      practice: [
        'Visualize roots growing from your feet deep into the Earth, anchoring and grounding you.',
        'See a column of white light descending from above, entering through your crown and filling your entire body.',
        'Expand this light to form a protective bubble around your entire energy field.',
        'Strengthen the bubble by adding layers: gold for divine protection, blue for peace, green for healing.',
        'Set the intention: "This armor protects me from all harm while allowing love and light to flow freely."',
        'Carry this protection with you throughout the day, refreshing it as needed.'
      ],
      reflection: [
        'In what situations do you feel most in need of protection?',
        'How does it feel to be surrounded by divine light and protection?',
        'What would you do differently if you felt completely safe and protected?'
      ],
      commitment: [
        'Practice the Armour of Light visualization.',
        'Use this protection technique before entering challenging situations.',
        'Notice how protection affects your confidence and interactions.'
      ],
      pdfLink: '/assets/Day6_EnergyFieldProtection.pdf'
    },
    {
      id: 7,
      title: 'Energy Field Maintenance & Integration',
      quote: 'Mastery isn\'t a destination. It\'s a daily practice.',
      introduction: 'You\'ve learned to see, clear, protect, and charge your energy field. Now comes the most important part: making these practices a natural part of your daily life. Integration transforms knowledge into wisdom and techniques into transformation.',
      clintonism: 'You don\'t graduate from energy work. You evolve with it.',
      content: [
        'Energy field maintenance is like physical fitness—it requires consistent practice to maintain strength and flexibility. The techniques you\'ve learned this week are tools in your spiritual toolkit, ready to be used whenever needed.',
        'Integration means weaving these practices into your daily routine until they become as natural as breathing. It\'s about creating a lifestyle that supports your energetic well-being.',
        'Your energy field is your responsibility. No one else can maintain it for you.'
      ],
      signs: [
        'Feeling energetically stable and resilient',
        'Quickly recognizing and addressing energy drains',
        'Maintaining clarity and peace in challenging situations',
        'Feeling empowered and in control of your energetic state'
      ],
      practice: [
        'Create a daily energy maintenance routine: morning protection, midday check-in, evening clearing.',
        'Set reminders to pause and assess your energy throughout the day.',
        'Practice the technique that feels most needed in each moment.',
        'Keep a simple energy journal to track patterns and progress.',
        'Share your knowledge with others who are ready to learn.',
        'Continue to deepen your practice through study and experience.'
      ],
      reflection: [
        'Which techniques from this week felt most powerful for you?',
        'How has your relationship with your energy changed?',
        'What daily practices will you commit to maintaining?'
      ],
      commitment: [
        'Design your personal daily energy maintenance routine.',
        'Commit to practicing energy awareness for the next 30 days.',
        'Share one technique with someone who could benefit from it.'
      ],
      pdfLink: '/assets/Day7_EnergyFieldMaintenance.pdf'
    }
  ]
<button
  onClick={() => setCurrentView('access')}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg m-4"
>
  Request Access
</button>  const markArmourSectionComplete = (section) => {
    setArmourProgress(prev => ({
      ...prev,
      [section]: true
    }))
  }

  const markDayComplete = (dayId) => {
    setCompletedDays(prev => new Set([...prev, dayId]))
  }

  const renderArmourOfLight = () => (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <img src={clintonSerioLogo} alt="Clinton Serio" className="mx-auto mb-8 h-24 w-auto" />
        <h1 className="text-6xl font-bold text-yellow-400 mb-4 font-serif tracking-wider">
          ARMOUR OF LIGHT
        </h1>
        <p className="text-2xl text-yellow-300 mb-6 italic">
          A Self-Blessing Ritual
        </p>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          You weren't born to survive the current. You were born to rise above it. 
          This is your one-day fire ritual for clarity, energy, and spiritual protection.
        </p>
        <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-yellow-400 text-lg font-semibold mb-2">Clinton Serio's Truth:</p>
          <p className="text-gray-200 text-lg italic">
            "Stand barefoot, rooted firmly into the earth. Breathe deeply. Now visualize a golden, 
            magical spiral of energy awakening beneath your feet, gently rising, wrapping your ankles, 
            swirling warmly upwards—filling you with strength, healing, and courage."
          </p>
        </div>
      </div>

      {/* Three Phases */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Morning Phase */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <img src={flameIcon} alt="flame" className="w-6 h-6" />
                Morning Activation
              </h3>
              <span className="text-sm text-gray-400">{armourContent.morning.duration}</span>
            </div>
            <p className="text-gray-300 mb-4">{armourContent.morning.purpose}</p>
            
            <div className="space-y-4">
              {armourContent.morning.steps.map((step, index) => (
                <div key={index} className="border-l-2 border-yellow-400/50 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm mb-2">{step.instruction}</p>
                  {step.visualization && (
                    <p className="text-yellow-200 text-sm italic">{step.visualization}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mt-6">
              <button
                onClick={() => markArmourSectionComplete('morning')}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  armourProgress.morning
                    ? 'bg-green-600 text-white'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                }`}
                disabled={armourProgress.morning}
              >
                {armourProgress.morning ? '✓ Completed' : 'Mark Complete'}
              </button>
              
              <button
                onClick={() => window.open('https://your-video-platform.com/armour-morning', '_blank')}
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Video Guide
              </button>
            </div>
          </div>

          {/* Afternoon Phase */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <img src={flameIcon} alt="flame" className="w-6 h-6" />
                Midday Reset
              </h3>
              <span className="text-sm text-gray-400">{armourContent.afternoon.duration}</span>
            </div>
            <p className="text-gray-300 mb-4">{armourContent.afternoon.purpose}</p>
            
            <div className="space-y-4">
              {armourContent.afternoon.steps.map((step, index) => (
                <div key={index} className="border-l-2 border-yellow-400/50 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm mb-2">{step.instruction}</p>
                  {step.affirmation && (
                    <p className="text-yellow-200 text-sm italic font-semibold">"{step.affirmation}"</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mt-6">
              <button
                onClick={() => markArmourSectionComplete('afternoon')}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  armourProgress.afternoon
                    ? 'bg-green-600 text-white'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                }`}
                disabled={armourProgress.afternoon}
              >
                {armourProgress.afternoon ? '✓ Completed' : 'Mark Complete'}
              </button>
              
              <button
                onClick={() => window.open('https://your-video-platform.com/armour-midday', '_blank')}
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Video Guide
              </button>
            </div>
          </div>

          {/* Evening Phase */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                <img src={flameIcon} alt="flame" className="w-6 h-6" />
                Evening Seal
              </h3>
              <span className="text-sm text-gray-400">{armourContent.evening.duration}</span>
            </div>
            <p className="text-gray-300 mb-4">{armourContent.evening.purpose}</p>
            
            <div className="space-y-4">
              {armourContent.evening.steps.map((step, index) => (
                <div key={index} className="border-l-2 border-yellow-400/50 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm mb-2">{step.instruction}</p>
                  {step.affirmation && (
                    <p className="text-yellow-200 text-sm italic font-semibold">"{step.affirmation}"</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mt-6">
              <button
                onClick={() => markArmourSectionComplete('evening')}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  armourProgress.evening
                    ? 'bg-green-600 text-white'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                }`}
                disabled={armourProgress.evening}
              >
                {armourProgress.evening ? '✓ Completed' : 'Mark Complete'}
              </button>
              
              <button
                onClick={() => window.open('https://your-video-platform.com/armour-evening', '_blank')}
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Video Guide
              </button>
            </div>
          </div>
        </div>

        {/* Continue to Workshop Button */}
        {isArmourComplete && (
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready for the Full Journey?</h3>
              <p className="text-gray-800 text-lg mb-6">
                You've completed the Armour of Light ritual. Now unlock the complete 
                7-Day Blessing Week Workshop and transform your life with Clinton Serio's 
                powerful energy mastery techniques.
              </p>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-gray-900 text-yellow-400 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-800 transition-all"
              >
                Continue to 7-Day Workshop
              </button>
            </div>
          </div>
        )}

        {/* Payment Gateway */}
        {showPayment && (
          <PaymentGateway
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </div>
    </div>
  )

  const renderWorkshop = () => (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <img src={clintonSerioLogo} alt="Clinton Serio" className="mx-auto mb-8 h-24 w-auto" />
        <h1 className="text-6xl font-bold text-yellow-400 mb-4 font-serif tracking-wider">
          BLESSING WEEK
        </h1>
        <p className="text-2xl text-yellow-300 mb-6 italic">
          7-Day Energy Mastery Workshop
        </p>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          Transform your energy field, reclaim your power, and master the art of spiritual protection 
          with Clinton Serio's proven techniques.
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedDays.size / 7) * 100}%` }}
            ></div>
          </div>
          <p className="text-gray-400 mt-2">{completedDays.size} of 7 days completed</p>
        </div>
      </div>

      {/* Workshop Days Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopData.map((day) => (
            <div
              key={day.id}
              className={`bg-gray-900/90 backdrop-blur-sm border rounded-lg p-6 transition-all hover:scale-105 ${
                completedDays.has(day.id)
                  ? 'border-green-500/50 bg-green-900/20'
                  : currentDay === day.id
                  ? 'border-yellow-400/50'
                  : 'border-gray-700/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                  <img src={flameIcon} alt="flame" className="w-5 h-5" />
                  Day {day.id}
                </h3>
                {completedDays.has(day.id) && (
                  <span className="text-green-400 text-2xl">✓</span>
                )}
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-2">{day.title}</h4>
              <p className="text-yellow-300 italic mb-4">"{day.quote}"</p>
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">{day.introduction}</p>
              
              <div className="space-y-3">
                <button
                  onClick={() => setCurrentDay(day.id)}
                  className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
                >
                  View Content
                </button>
                
                <a
                  href={day.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-white/20 transition-all border border-white/20"
                >
                  Download PDF
                </a>
                
                {!completedDays.has(day.id) && (
                  <button
                    onClick={() => markDayComplete(day.id)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition-all"
                  >
                    Mark Complete
                  </button>
                )}
                
                <button
                  onClick={() => window.open(`https://your-video-platform.com/day-${day.id}`, '_blank')}
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Watch Video Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Content */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-400/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">🎁 Bonus Content</h3>
            <p className="text-gray-300 text-lg mb-6">
              Unlock the sacred Blessing Mix recipe - the elixir of light for cleansing and blessing your space.
            </p>
            <button
              onClick={() => setCurrentView('blessing')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-purple-500 transition-all"
            >
              Access Blessing Mix
            </button>
          </div>
        </div>
      </div>

      {/* Day Content Modal */}
      {currentDay && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-900 border border-yellow-400/30 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-yellow-400">
                Day {currentDay}: {workshopData.find(d => d.id === currentDay)?.title}
              </h2>
              <button
                onClick={() => setCurrentDay(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            {(() => {
              const day = workshopData.find(d => d.id === currentDay)
              return (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-2xl text-yellow-300 italic mb-4">"{day.quote}"</p>
                    <p className="text-gray-300 text-lg">{day.introduction}</p>
                    <p className="text-yellow-400 font-semibold mt-4">Clintonism: "{day.clintonism}"</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Understanding</h3>
                    <div className="space-y-3">
                      {day.content.map((paragraph, index) => (
                        <p key={index} className="text-gray-300">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Signs to Watch For</h3>
                    <ul className="space-y-2">
                      {day.signs.map((sign, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Daily Practice</h3>
                    <ol className="space-y-2">
                      {day.practice.map((step, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-3">
                          <span className="text-yellow-400 font-bold">{index + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Reflection Questions</h3>
                    <ul className="space-y-2">
                      {day.reflection.map((question, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Today's Commitment</h3>
                    <ul className="space-y-2">
                      {day.commitment.map((item, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )

  // Scroll to top when Blessing Mix page loads
  useEffect(() => {
    if (currentView === 'blessing') {
      window.scrollTo(0, 0)
    }
  }, [currentView])

  const renderBlessingMix = () => (
    <div className="min-h-screen">
      <div className="text-center py-16 px-4">
        <img src={clintonSerioLogo} alt="Clinton Serio" className="mx-auto mb-8 h-24 w-auto" />
        <h1 className="text-6xl font-bold text-yellow-400 mb-4 font-serif tracking-wider">
          BLESSING MIX
        </h1>
        <p className="text-2xl text-yellow-300 mb-6 italic">
          The Elixir of Light
        </p>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          You are not a victim of your circumstances. You are the architect of your reality.
        </p>
        <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-yellow-400 text-lg font-semibold mb-2">Clinton Serio's Truth:</p>
          <p className="text-gray-200 text-lg italic">
            "This is not a chore. This is ceremony. Enter with reverence."
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Phase Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button 
            onClick={() => document.getElementById('prepare').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all"
          >
            PREPARE
          </button>
          <button 
            onClick={() => document.getElementById('create').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all"
          >
            CREATE
          </button>
          <button 
            onClick={() => document.getElementById('bless').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all"
          >
            BLESS
          </button>
          <button 
            onClick={() => document.getElementById('transform').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all"
          >
            TRANSFORM
          </button>
        </div>

        {/* Phase 1: Prepare */}
        <section id="prepare" className="mb-16">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center font-serif">
              PHASE I: PREPARE
            </h2>
            <h3 className="text-2xl text-yellow-300 mb-6 text-center">Sacred Preparation</h3>
            <p className="text-xl text-gray-300 mb-8 text-center">
              This is not a chore. This is ceremony. Enter with reverence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                    <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                    Clear Your Sacred Space
                  </h4>
                  <p className="text-gray-300">
                    Find a quiet place where you will not be disturbed. This is your temple for the next hour. 
                    Clean the surface where you will work. Light a candle. Let the flame remind you that you 
                    are working with sacred fire.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                    <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                    Cleanse Your Vessel
                  </h4>
                  <p className="text-gray-300">
                    Wash your hands with intention. As the water flows over your skin, imagine it washing away 
                    doubt, fear, and limitation. Your hands are about to become instruments of transformation.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                    <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                    Center Your Being
                  </h4>
                  <p className="text-gray-300">
                    Sit quietly. Close your eyes. Take seven deep breaths. With each exhale, release what no 
                    longer serves you. With each inhale, draw in clarity and power. Feel your feet connected 
                    to the Earth. Feel your crown open to the sky.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                    <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                    Declare Your Intention
                  </h4>
                  <p className="text-gray-300">
                    Speak these words aloud with conviction: <em className="text-yellow-200">
                    "I am about to create something sacred. I am worthy of protection. I am worthy of blessing. 
                    I call upon the light within me to guide this work."</em>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Breathing Visualization</h4>
              <p className="text-gray-300">
                Imagine golden light entering through your crown with each breath. See it flowing down your spine, 
                filling your heart, extending through your arms into your hands. You are now ready to create liquid light.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 2: Create */}
        <section id="create" className="mb-16">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center font-serif">
              PHASE II: CREATE
            </h2>
            <h3 className="text-2xl text-yellow-300 mb-6 text-center">The Alchemy of Sacred Elements</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Brown Vinegar (250ml)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Dissolver of Illusion</p>
                <p className="text-gray-300 text-sm">
                  Cuts through stagnant energy and false beliefs. Represents the courage to face what no longer serves. 
                  Pour first - let it begin the clearing.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Sea Salt (1 tablespoon)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Purifier of Ancient Wisdom</p>
                <p className="text-gray-300 text-sm">
                  Crystallized ocean memory, holder of primal cleansing power. Neutralizes negative charge 
                  in your energetic field.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Epsom Salt (1 tablespoon)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Nervous System Healer</p>
                <p className="text-gray-300 text-sm">
                  Magnesium that relaxes tension held in both body and space. Creates receptivity for new energy to flow.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Sage (1 tablespoon)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Wisdom Keeper</p>
                <p className="text-gray-300 text-sm">
                  Sacred herb that carries prayers to higher realms. Clears confusion and brings mental clarity.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Rosemary (1 tablespoon)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Remembrance Herb</p>
                <p className="text-gray-300 text-sm">
                  Awakens memory of your true power. Strengthens connection to your higher self.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Lavender (1 tablespoon)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Peace Bringer</p>
                <p className="text-gray-300 text-sm">
                  Calms anxiety and invites tranquility. Opens the heart to receive blessings.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 mb-2">Pure Water (250ml)</h4>
                <p className="text-yellow-200 text-sm italic mb-3">The Carrier of Consciousness</p>
                <p className="text-gray-300 text-sm">
                  Water remembers intention and amplifies it. The foundation that holds all other elements in sacred unity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Bless */}
        <section id="bless" className="mb-16">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center font-serif">
              PHASE III: BLESS
            </h2>
            <h3 className="text-2xl text-yellow-300 mb-6 text-center">Sacred Activation</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-300 mb-3">Combine with Intention</h4>
                <p className="text-gray-300 mb-4">
                  In a clean glass container, pour the brown vinegar first. Add each salt slowly, watching them dissolve. 
                  Add the herbs one by one, speaking their purpose aloud. Finally, add the pure water.
                </p>
                <p className="text-yellow-200 italic">
                  "I combine these sacred elements with love and intention. May they serve the highest good."
                </p>
              </div>
              
              <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-300 mb-3">Stir with Purpose</h4>
                <p className="text-gray-300 mb-4">
                  Using a wooden spoon or your finger, stir the mixture clockwise 7 times. With each stir, 
                  visualize golden light entering the liquid, charging it with protective and cleansing energy.
                </p>
                <p className="text-yellow-200 italic">
                  "With each turn, I infuse this elixir with divine light and protection."
                </p>
              </div>
              
              <div className="bg-gray-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-300 mb-3">Seal the Blessing</h4>
                <p className="text-gray-300 mb-4">
                  Hold your hands over the container. Close your eyes and feel the energy flowing from your heart, 
                  through your arms, into your hands, and into the mixture. Speak the final blessing:
                </p>
                <p className="text-yellow-200 italic text-lg">
                  "I bless this elixir with divine light. May it clear all negativity, protect all who encounter it, 
                  and bring peace to every space it touches. So it is, and so it shall be."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4: Transform */}
        <section id="transform" className="mb-16">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-8">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center font-serif">
              PHASE IV: TRANSFORM
            </h2>
            <h3 className="text-2xl text-yellow-300 mb-6 text-center">Sacred Application</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">How to Use Your Blessing Mix</h4>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🏠 Space Clearing</h5>
                    <p className="text-gray-300 text-sm">
                      Sprinkle around doorways, corners, and windows. Walk clockwise through your space, 
                      setting intention for protection and peace.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🛡️ Personal Protection</h5>
                    <p className="text-gray-300 text-sm">
                      Dab a small amount on your wrists, behind your ears, or on your third eye before 
                      entering challenging situations.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🧘 Meditation Enhancement</h5>
                    <p className="text-gray-300 text-sm">
                      Place a few drops around your meditation space to enhance spiritual connection 
                      and clarity.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">💼 Workplace Harmony</h5>
                    <p className="text-gray-300 text-sm">
                      Discreetly apply to your workspace to maintain positive energy and clear 
                      negative influences.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Storage & Care</h4>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🌙 Proper Storage</h5>
                    <p className="text-gray-300 text-sm">
                      Store in a dark, cool place. A glass container with a tight lid works best. 
                      Keep away from direct sunlight.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">⏰ Shelf Life</h5>
                    <p className="text-gray-300 text-sm">
                      Your Blessing Mix will remain potent for 3-6 months. Trust your intuition - 
                      if it feels energetically flat, it's time to create a fresh batch.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🔄 Recharging</h5>
                    <p className="text-gray-300 text-sm">
                      Place under moonlight during the full moon to recharge its energy. 
                      You can also hold it during meditation to infuse it with fresh intention.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-300 mb-2">🎁 Sharing</h5>
                    <p className="text-gray-300 text-sm">
                      This elixir can be shared with loved ones who need protection and blessing. 
                      Always share with love and explain its sacred purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">Clinton Serio's Final Word</h4>
              <p className="text-gray-300 text-lg mb-4">
                "This elixir carries your intention. Use it wisely, use it with love. Remember, you are not just 
                clearing space - you are claiming your sovereignty, declaring your worth, and anchoring light 
                in the physical world."
              </p>
              <p className="text-yellow-300 italic font-semibold text-xl">
                "You are the alchemist of your own reality. This is your liquid light."
              </p>
            </div>
          </div>
        </section>
        
        <div className="text-center">
          <button
            onClick={() => setCurrentView('workshop')}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition-all"
          >
            Return to Workshop
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${dynamicBackground})` }}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {currentView === 'armour' && renderArmourOfLight()}
        {currentView === 'workshop' && renderWorkshop()}
        {currentView === 'blessing' && renderBlessingMix()}
        {currentView === 'access' && <AccessRequest />}     
      </div>
    </div>
  )
}

export default App

