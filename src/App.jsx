import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showAdultContent, setShowAdultContent] = useState(false)

  const handleAdultContentToggle = () => {
    setShowAdultContent(!showAdultContent)
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'management', label: 'Management', icon: '💊' },
    { id: 'family', label: 'Family Life', icon: '👨‍👩‍👧‍👦' },
    { id: 'intimacy', label: 'Intimacy', icon: '💕' },
    { id: 'activities', label: 'Activities', icon: '🏃‍♂️' },
    { id: 'natural', label: 'Natural Approaches', icon: '🌿' },
    { id: 'guidelines', label: 'Guidelines', icon: '📖' }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Understanding Pinworms</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pinworms (Enterobius vermicularis) are the most common intestinal parasite in developed countries, 
          affecting millions of people worldwide. These small, white worms primarily affect children but can 
          infect anyone in close contact.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <h3 className="font-semibold text-green-800 mb-2">✅ Key Facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Most common in children aged 5-10</li>
              <li>• Highly contagious within households</li>
              <li>• Not dangerous but very uncomfortable</li>
              <li>• Easily treatable with proper medication</li>
              <li>• Reinfection is common without proper hygiene</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Common Symptoms</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Intense anal itching, especially at night</li>
              <li>• Restless sleep and irritability</li>
              <li>• Visible white threads in stool or underwear</li>
              <li>• Abdominal discomfort</li>
              <li>• In girls: vaginal itching or discharge</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Transmission & Lifecycle</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">🥚</div>
            <h4 className="font-semibold text-purple-700">Egg Stage</h4>
            <p className="text-sm text-gray-600 mt-2">Female worms lay eggs around the anus at night, causing intense itching</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">👋</div>
            <h4 className="font-semibold text-purple-700">Transmission</h4>
            <p className="text-sm text-gray-600 mt-2">Scratching transfers eggs to hands, then to mouth or surfaces</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-semibold text-purple-700">Reinfection</h4>
            <p className="text-sm text-gray-600 mt-2">Complete lifecycle takes 2-3 weeks, enabling continuous reinfection</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-red-800 mb-4">Why Household Treatment is Critical</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          All household members must be treated simultaneously, even if symptom-free. Many people, 
          especially in early stages, don't notice obvious symptoms. The microscopic eggs can survive 
          on surfaces for up to 3 weeks and are easily transferred between family members.
        </p>
        <div className="bg-white p-4 rounded-lg mt-4">
          <h4 className="font-semibold text-red-700 mb-2">What Kills Pinworm Eggs:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Hot water (60°C/140°F or higher)</li>
            <li>• Soap and thorough washing</li>
            <li>• Disinfectants and cleaning products</li>
            <li>• High heat from dryers</li>
            <li>• UV light from sunlight</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg mt-4">
          <h4 className="font-semibold text-red-700 mb-2">What Doesn't Kill Eggs:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Hand sanitizer alone</li>
            <li>• Cold water washing</li>
            <li>• Air fresheners</li>
            <li>• Vacuum cleaning alone</li>
          </ul>
        </div>
      </div>
    </div>
  )

  const renderManagement = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">5-Phase Management Approach</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Successful pinworm treatment requires a comprehensive approach combining medication, 
          hygiene protocols, and environmental control. This systematic method ensures complete 
          elimination and prevents reinfection.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 mb-2">Phase 1: Immediate Treatment</h3>
            <p className="text-sm text-gray-700">Administer medication to all household members simultaneously</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <h3 className="font-semibold text-green-800 mb-2">Phase 2: Hygiene Protocol</h3>
            <p className="text-sm text-gray-700">Implement strict personal and household hygiene measures</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <h3 className="font-semibold text-yellow-800 mb-2">Phase 3: Environmental Control</h3>
            <p className="text-sm text-gray-700">Deep clean and disinfect all surfaces and textiles</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
            <h3 className="font-semibold text-purple-800 mb-2">Phase 4: Second Treatment</h3>
            <p className="text-sm text-gray-700">Administer second dose after 14 days to break lifecycle</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
            <h3 className="font-semibold text-red-800 mb-2">Phase 5: Monitoring</h3>
            <p className="text-sm text-gray-700">Watch for symptoms and maintain preventive measures</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
        <h3 className="text-xl font-semibold text-green-800 mb-6">Medication Information</h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3">Mebendazole (Vermox)</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Mechanism:</strong> Blocks glucose uptake in worms, causing energy depletion and death</p>
              <p><strong>Dosage:</strong> 100mg single dose, repeat after 14 days</p>
              <p><strong>Effectiveness:</strong> 90-95% cure rate with proper dosing</p>
              <p><strong>Side Effects:</strong> Minimal - occasional mild stomach upset</p>
              <p><strong>Age Limit:</strong> Safe for children over 2 years</p>
              <p><strong>Availability:</strong> Over-the-counter in most countries</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-3">Albendazole (Zentel)</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Mechanism:</strong> Disrupts microtubule formation, preventing cell division</p>
              <p><strong>Dosage:</strong> 400mg single dose, repeat after 14 days</p>
              <p><strong>Effectiveness:</strong> 85-90% cure rate, slightly lower than mebendazole</p>
              <p><strong>Side Effects:</strong> Rare - headache, dizziness, nausea</p>
              <p><strong>Age Limit:</strong> Safe for children over 1 year</p>
              <p><strong>Availability:</strong> Prescription required in most countries</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-3">Pyrantel Pamoate (Pin-X)</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Mechanism:</strong> Paralyzes worms by blocking neuromuscular transmission</p>
              <p><strong>Dosage:</strong> 11mg/kg single dose, repeat after 14 days</p>
              <p><strong>Effectiveness:</strong> 80-85% cure rate, good alternative option</p>
              <p><strong>Side Effects:</strong> Mild - nausea, stomach cramps, diarrhea</p>
              <p><strong>Age Limit:</strong> Safe for children over 2 years</p>
              <p><strong>Availability:</strong> Over-the-counter, liquid form available</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">International Treatment Protocols</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Standard Protocol (Most Countries):</strong></p>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Day 0: First dose to all household members</li>
                <li>Day 14: Second dose to all household members</li>
                <li>Monitor for 2-4 weeks after final dose</li>
              </ul>
            </div>
            <div>
              <p><strong>Enhanced Protocol (Some Regions):</strong></p>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Day 0: First dose</li>
                <li>Day 14: Second dose</li>
                <li>Day 28: Third dose (Denmark, some Nordic countries)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-50 border border-red-200 p-4 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-2">Critical Treatment Guidelines</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>All household members must be treated simultaneously, even if symptom-free</li>
            <li>Intimate partners should be treated even if living separately</li>
            <li>Complete the full course - single doses are often insufficient</li>
            <li>Maintain strict hygiene throughout the entire treatment period</li>
            <li>Consult healthcare provider for pregnant women, infants under 2, or immunocompromised individuals</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-800 mb-6">Treatment Timeline & Expectations</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
              <h4 className="font-semibold text-blue-800">Week 1</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Initial Treatment</strong></p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Take first medication dose</li>
              <li>• Begin strict hygiene protocol</li>
              <li>• Start environmental cleaning</li>
              <li>• Symptoms may initially worsen</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
              <h4 className="font-semibold text-green-800">Week 2</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Continue Protocol</strong></p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Maintain hygiene measures</li>
              <li>• Symptoms should start improving</li>
              <li>• Continue environmental control</li>
              <li>• Prepare for second dose</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
              <h4 className="font-semibold text-yellow-800">Week 3</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Second Dose</strong></p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Take second medication dose</li>
              <li>• Critical for breaking lifecycle</li>
              <li>• Continue all hygiene measures</li>
              <li>• Most symptoms should be resolved</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">4</span>
              <h4 className="font-semibold text-purple-800">Week 4</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Recovery & Monitoring</strong></p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Monitor for any returning symptoms</li>
              <li>• Gradually relax strict measures</li>
              <li>• Maintain good hygiene habits</li>
              <li>• Seek follow-up if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderFamilyLife = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Managing Family Dynamics During Treatment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pinworm treatment affects the entire household and requires coordination across different age groups, 
          living situations, and family dynamics. Success depends on everyone understanding their role and 
          maintaining consistent protocols.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800 mb-4">👶 Young Children (Ages 2-7)</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Daily Supervision Needs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Supervised handwashing after bathroom use and before meals</li>
                <li>• Help with morning showers to mechanically remove overnight eggs</li>
                <li>• Assistance with underwear changes (morning and bedtime)</li>
                <li>• Nail trimming and cleaning supervision</li>
                <li>• Gentle reminders not to scratch</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">Age-Appropriate Explanations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "Tiny bugs in your tummy that make you itchy"</li>
                <li>• "Special medicine to make the bugs go away"</li>
                <li>• "Extra washing to keep the bugs from coming back"</li>
                <li>• Focus on positive reinforcement for good hygiene</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">🧒 School-Age Children (Ages 8-12)</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Building Independence</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Teach proper handwashing technique with supervision</li>
                <li>• Encourage self-monitoring of hygiene habits</li>
                <li>• Involve in laundry sorting and bedding changes</li>
                <li>• Create hygiene checklists they can follow</li>
                <li>• Explain the importance without causing anxiety</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">School Considerations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pack hand sanitizer for school use</li>
                <li>• Remind about bathroom hygiene at school</li>
                <li>• Consider informing close friends' parents</li>
                <li>• No need to keep child home during treatment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">👦 Teenagers (Ages 13+)</h3>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">Privacy & Independence</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Provide clear, factual information about the condition</li>
                <li>• Respect their need for privacy while ensuring compliance</li>
                <li>• Allow them to manage their own hygiene with check-ins</li>
                <li>• Address any embarrassment or social concerns</li>
                <li>• Involve them in household cleaning efforts</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">Social Considerations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Discuss discretion about sharing with friends</li>
                <li>• Address concerns about sleepovers or social activities</li>
                <li>• Emphasize that it's common and not their fault</li>
                <li>• Support them through any social anxiety</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">👨‍👩‍👧‍👦 Mixed-Age Households</h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">Coordination Strategies</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Assign age-appropriate responsibilities to older children</li>
                <li>• Create family hygiene schedules and checklists</li>
                <li>• Use older siblings as positive role models</li>
                <li>• Ensure consistent messaging across age groups</li>
                <li>• Plan family activities that support treatment goals</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Shared Spaces Management</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Coordinate bathroom schedules for morning showers</li>
                <li>• Manage shared bedrooms and play areas</li>
                <li>• Organize laundry to prevent cross-contamination</li>
                <li>• Create designated areas for clean clothes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-800 mb-4">🏠 Special Family Situations</h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-3">Custody Arrangements</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Communication:</strong> Both parents must be informed and coordinate treatment</li>
              <li>• <strong>Medication:</strong> Ensure both households have medication and understand timing</li>
              <li>• <strong>Hygiene:</strong> Consistent protocols must be maintained at both homes</li>
              <li>• <strong>Supplies:</strong> Provide hygiene supplies for both households</li>
              <li>• <strong>Documentation:</strong> Share treatment timeline and progress notes</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-3">Extended Family Living</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Grandparents:</strong> May need extra support understanding modern treatment</li>
              <li>• <strong>Multiple Families:</strong> Coordinate treatment across all family units</li>
              <li>• <strong>Shared Facilities:</strong> Extra attention to bathroom and laundry protocols</li>
              <li>• <strong>Cultural Considerations:</strong> Respect different approaches while maintaining medical standards</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-4">💡 Family Success Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Creating Positive Habits</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Make hygiene routines fun with songs or games</li>
              <li>• Use reward systems for consistent compliance</li>
              <li>• Celebrate milestones in the treatment process</li>
              <li>• Focus on family teamwork and support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Long-term Prevention</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Maintain improved hygiene habits after treatment</li>
              <li>• Regular family discussions about health and hygiene</li>
              <li>• Create systems that work for your family's lifestyle</li>
              <li>• Build resilience for handling future health challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderIntimacy = () => (
    <div className="space-y-8">
      {!showAdultContent ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Adult Content Warning</h2>
          <p className="text-gray-700 mb-6">
            This section contains mature content about intimacy during pinworm treatment. 
            It's intended for adults and provides important health guidance for couples.
          </p>
          <button
            onClick={handleAdultContentToggle}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            I am 18+ and want to view this content
          </button>
        </div>
      ) : (
        <>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-blue-800">Intimacy During Pinworm Treatment</h2>
              <button
                onClick={handleAdultContentToggle}
                className="text-blue-600 hover:text-blue-800 text-sm underline"
              >
                Hide Content
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maintaining intimacy during pinworm treatment requires understanding transmission risks 
              and implementing appropriate precautions. This guidance helps couples navigate physical 
              intimacy safely while ensuring effective treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Safe Activities</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Low-Risk Intimate Activities</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kissing and upper body contact</li>
                    <li>• Non-genital intimate touching</li>
                    <li>• Vaginal intercourse with proper hygiene</li>
                    <li>• Mutual masturbation with clean hands</li>
                    <li>• Intimate activities after morning showers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Timing Recommendations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Best after morning showers (removes overnight eggs)</li>
                    <li>• Avoid late evening activities (peak egg-laying time)</li>
                    <li>• Wait 24-48 hours after first medication dose</li>
                    <li>• Resume normal activities after second dose</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ High-Risk Activities</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Activities to Avoid</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Anal contact or intercourse</li>
                    <li>• Oral-anal contact (rimming)</li>
                    <li>• Any contact with the anal area</li>
                    <li>• Sharing unwashed sex toys</li>
                    <li>• Intimate contact without prior hygiene</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Why These Restrictions Matter</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Anal area has highest concentration of eggs</li>
                    <li>• Direct transmission risk to partner</li>
                    <li>• Can reinfect treated individual</li>
                    <li>• Compromises treatment effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">💕 Practical Guidelines for Couples</h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-2">Before Intimacy</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Both partners shower thoroughly</li>
                    <li>• Wash hands and trim fingernails</li>
                    <li>• Put on fresh, clean underwear</li>
                    <li>• Ensure bedroom has clean linens</li>
                    <li>• Have clean towels readily available</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">During Intimacy</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Maintain focus on low-risk activities</li>
                    <li>• Avoid touching anal area completely</li>
                    <li>• Wash hands if contact occurs accidentally</li>
                    <li>• Use barriers (condoms) if preferred</li>
                    <li>• Communicate openly about comfort levels</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">After Intimacy</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Both partners wash hands thoroughly</li>
                    <li>• Clean genital areas with soap and water</li>
                    <li>• Change into fresh underwear</li>
                    <li>• Wash any used towels or linens</li>
                    <li>• Maintain regular hygiene routine</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Partner Treatment</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Treat all household members and intimate partners simultaneously</li>
                    <li>• Partners should take medication even if symptom-free</li>
                    <li>• Coordinate treatment timing between households</li>
                    <li>• Both partners follow hygiene protocols</li>
                    <li>• Monitor each other for symptoms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">🌟 Maintaining Connection During Treatment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Emotional Intimacy</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Focus on emotional connection and communication</li>
                  <li>• Practice patience and understanding</li>
                  <li>• Support each other through the treatment process</li>
                  <li>• Plan special non-physical intimate activities</li>
                  <li>• Remember that restrictions are temporary</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Alternative Intimacy</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Massage and non-genital physical touch</li>
                  <li>• Romantic activities like candlelit dinners</li>
                  <li>• Shared baths or showers (with hygiene focus)</li>
                  <li>• Intimate conversations and emotional sharing</li>
                  <li>• Planning for post-treatment celebration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Important Medical Considerations</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">When to Seek Medical Advice</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• If symptoms persist after completing treatment</li>
                  <li>• If partner develops symptoms during treatment</li>
                  <li>• For pregnancy-related treatment questions</li>
                  <li>• If unusual symptoms or reactions occur</li>
                  <li>• For guidance on complex family situations</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Remember</h4>
                <p className="text-sm text-gray-700">
                  Pinworm infections are common, treatable, and not a reflection of personal hygiene. 
                  Open communication with your partner and following medical guidance will ensure 
                  successful treatment while maintaining your relationship's intimacy and connection.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )

  const renderActivities = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Maintaining Normal Activities During Treatment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pinworm treatment doesn't require isolation or major lifestyle changes. With proper hygiene 
          precautions, most daily activities can continue normally. The key is understanding which 
          activities need extra attention and which are perfectly safe.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Safe Activities</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🏫 Work & School</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Continue normal attendance - no isolation needed</li>
                <li>• Maintain regular handwashing throughout the day</li>
                <li>• Pack hand sanitizer for frequent use</li>
                <li>• Avoid sharing food or drinks with others</li>
                <li>• Use personal towels in workplace bathrooms</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">🏊‍♂️ Swimming & Water Activities</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Swimming is generally safe - chlorine in pools kills pinworm eggs</li>
                <li>• Shower before and after swimming</li>
                <li>• Change into clean, dry clothes immediately after</li>
                <li>• Avoid sharing towels or swimwear</li>
                <li>• Ocean and lake swimming are also safe with proper hygiene</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">🏃‍♂️ Exercise & Sports</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• All forms of exercise are encouraged</li>
                <li>• Shower immediately after sweating</li>
                <li>• Wash workout clothes in hot water</li>
                <li>• Use personal towels and water bottles</li>
                <li>• Maintain extra hygiene in locker rooms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Activities Requiring Extra Care</h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">✈️ Travel</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Time travel after treatment completion when possible</li>
                <li>• Pack extra hygiene supplies and medications</li>
                <li>• Maintain strict handwashing routines</li>
                <li>• Bring personal towels and avoid hotel towels</li>
                <li>• Consider travel insurance for medical needs</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 mb-2">🛏️ Sleepovers & Overnight Stays</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Postpone sleepovers until treatment is complete</li>
                <li>• If unavoidable, bring personal bedding and towels</li>
                <li>• Maintain morning shower routine</li>
                <li>• Pack personal hygiene supplies</li>
                <li>• Inform host parents if comfortable doing so</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🍽️ Food Handling & Preparation</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Wash hands thoroughly before food preparation</li>
                <li>• Avoid preparing food for others when possible</li>
                <li>• Use serving utensils instead of hands</li>
                <li>• Clean all surfaces and utensils with hot, soapy water</li>
                <li>• Consider having others handle food preparation temporarily</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Activities to Temporarily Avoid</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">Social Activities</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sharing beds or close sleeping arrangements</li>
              <li>• Communal bathing or hot tubs</li>
              <li>• Sharing personal items (towels, underwear, brushes)</li>
              <li>• Close contact activities without hygiene precautions</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">Hygiene-Sensitive Environments</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Daycare volunteering or childcare for others</li>
              <li>• Food service work (until treatment complete)</li>
              <li>• Healthcare work involving patient contact</li>
              <li>• Activities involving handling others' laundry</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Activity-Specific Guidelines</h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🏢 Workplace</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Use personal coffee mugs and utensils</li>
              <li>• Wipe down shared surfaces before use</li>
              <li>• Avoid sharing keyboards or phones when possible</li>
              <li>• Pack individual lunches and snacks</li>
              <li>• Maintain professional hygiene standards</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">🏫 School Environment</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Use personal supplies and avoid sharing</li>
              <li>• Wash hands before and after lunch</li>
              <li>• Use individual water bottles</li>
              <li>• Maintain distance during group activities</li>
              <li>• Follow school hygiene protocols</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">🏋️‍♀️ Fitness Centers</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Wipe equipment before and after use</li>
              <li>• Shower immediately after workouts</li>
              <li>• Wear flip-flops in locker rooms</li>
              <li>• Use personal towels exclusively</li>
              <li>• Avoid steam rooms and saunas temporarily</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-4">💡 Tips for Maintaining Normal Life</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Practical Strategies</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Create portable hygiene kits for activities</li>
              <li>• Set phone reminders for handwashing</li>
              <li>• Plan activities around hygiene routines</li>
              <li>• Communicate needs clearly to family and friends</li>
              <li>• Focus on activities that support overall health</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Mental Health</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Maintain social connections with appropriate precautions</li>
              <li>• Continue hobbies and interests that don't conflict with treatment</li>
              <li>• Practice stress-reduction techniques</li>
              <li>• Remember that restrictions are temporary</li>
              <li>• Seek support if feeling isolated or anxious</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNatural = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Natural Approaches & Dietary Support</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          While prescription medication remains the most effective treatment for pinworms, certain 
          dietary approaches and natural remedies may provide supportive benefits. These approaches 
          should complement, not replace, medical treatment.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Important Medical Disclaimer</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The natural approaches listed below are based on traditional use and limited scientific research. 
          While some studies suggest potential benefits, the evidence for pinworm-specific effectiveness 
          is limited. These methods should be used as supportive measures alongside proven medical treatment, 
          not as primary treatment options.
        </p>
        <div className="bg-white p-4 rounded-lg mt-4">
          <p className="text-sm text-gray-600">
            <strong>Always consult with a healthcare provider before using natural remedies,</strong> 
            especially for children, pregnant women, or individuals with underlying health conditions. 
            Some natural substances can interact with medications or cause adverse reactions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800 mb-4">🌱 Potentially Helpful Foods</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🎃 Pumpkin Seeds</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Active Compound:</strong> Cucurbitacin compounds that may affect parasite motility and attachment
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Evidence:</strong> Studies on other parasites show 69-75% reduction in some cases, but limited pinworm-specific research
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Traditional Use:</strong> Widely used across cultures for intestinal parasites for centuries
              </p>
              <p className="text-sm text-gray-600">
                <em>Suggested use: 1-2 handfuls of raw, unsalted pumpkin seeds daily (limited scientific evidence)</em>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🧄 Garlic</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Active Compound:</strong> Allicin, which disrupts parasite cell membranes and metabolic processes
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Evidence:</strong> Proven effective against protozoan parasites like Giardia and Entamoeba in laboratory studies
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Mechanism:</strong> Most effective when crushed fresh, releasing maximum allicin content
              </p>
              <p className="text-sm text-gray-600">
                <em>Suggested use: Fresh garlic incorporated into cooking (traditional use)</em>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🥛 Probiotic Foods</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Mechanism:</strong> Strengthen gut barrier function and enhance immune response against parasites
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Evidence:</strong> Strong research supporting gut microbiome's role in parasite resistance
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Function:</strong> Beneficial bacteria produce antimicrobial compounds and compete for resources
              </p>
              <p className="text-sm text-gray-600">
                <em>Examples: Yogurt, kefir, fermented vegetables, kombucha</em>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🌾 High-Fiber Foods</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Mechanism:</strong> Support beneficial bacteria growth and enhance intestinal mucus production
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Evidence:</strong> Well-established benefits for gut health and immune function
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Function:</strong> Improve intestinal transit and support natural parasite elimination processes
              </p>
              <p className="text-sm text-gray-600">
                <em>Examples: Vegetables, fruits, whole grains, legumes</em>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Foods to Limit</h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🍬 Sugar & Refined Carbohydrates</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why Limit:</strong> Can disrupt gut microbiome balance and suppress immune system function
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Scientific Rationale:</strong> High sugar intake promotes harmful bacteria growth and reduces beneficial microbes
              </p>
              <p className="text-sm text-gray-600">
                <em>Examples: Candy, sodas, white bread, pastries, processed snacks</em>
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🥫 Processed Foods</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why Limit:</strong> Often lack essential nutrients needed for immune function and contain disruptive additives
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Scientific Rationale:</strong> Preservatives and artificial ingredients can negatively impact gut microbiome
              </p>
              <p className="text-sm text-gray-600">
                <em>Examples: Fast food, packaged meals, processed meats, artificial snacks</em>
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🌶️ Digestive Irritants</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why Limit:</strong> May worsen digestive symptoms during treatment and recovery
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Individual Variation:</strong> Tolerance varies by person; monitor your body's response
              </p>
              <p className="text-sm text-gray-600">
                <em>Examples: Very spicy foods, excessive caffeine, alcohol (for adults)</em>
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🐟 Undercooked Meat & Fish</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why Avoid:</strong> Risk of additional parasitic infections while immune system is dealing with pinworms
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Precautionary Measure:</strong> Ensure all animal proteins are thoroughly cooked during treatment
              </p>
              <p className="text-sm text-gray-600">
                <em>Temporary restriction during active treatment period</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">🌿 Additional Natural Support Methods</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">🍵 Herbal Teas</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Chamomile:</strong> May help with digestive comfort and sleep quality</li>
                <li>• <strong>Ginger:</strong> Traditional use for digestive support and nausea</li>
                <li>• <strong>Peppermint:</strong> May provide digestive comfort and reduce inflammation</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                <em>Note: Limited scientific evidence for antiparasitic effects</em>
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">💧 Hydration Support</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Increased water intake to support natural detoxification</li>
                <li>• Herbal teas as part of daily fluid intake</li>
                <li>• Avoid excessive caffeine which can be dehydrating</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">🧘‍♀️ Stress Management</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Stress can weaken immune function</li>
                <li>• Practice relaxation techniques</li>
                <li>• Ensure adequate sleep for immune support</li>
                <li>• Light exercise to support overall health</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🌞 General Health Support</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Adequate vitamin D from sunlight or supplements</li>
                <li>• Balanced nutrition to support immune function</li>
                <li>• Regular sleep schedule</li>
                <li>• Moderate physical activity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Critical Reminders</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Medical Treatment Priority</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Prescription medications remain the most effective treatment</li>
              <li>• Natural approaches should supplement, not replace, medical treatment</li>
              <li>• Complete the full course of prescribed medication</li>
              <li>• Consult healthcare providers before combining treatments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700 mb-2">Safety Considerations</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Some natural substances can interact with medications</li>
              <li>• Children and pregnant women need special consideration</li>
              <li>• Monitor for any adverse reactions</li>
              <li>• Seek medical advice if symptoms worsen or persist</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">📚 Research & Evidence Summary</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Current scientific research on natural pinworm treatments is limited. Most evidence comes from:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Traditional Use</h4>
            <p className="text-sm text-gray-700">Historical and cultural practices passed down through generations</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Laboratory Studies</h4>
            <p className="text-sm text-gray-700">In vitro research on parasite effects, not always applicable to humans</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Related Research</h4>
            <p className="text-sm text-gray-700">Studies on other parasites or general gut health benefits</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <em>More rigorous clinical trials specifically for pinworm treatment are needed to establish definitive evidence for natural approaches.</em>
        </p>
      </div>
    </div>
  )

  const renderGuidelines = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Comprehensive Treatment Guidelines</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These evidence-based guidelines provide a complete framework for successful pinworm treatment. 
          Following these protocols systematically ensures the highest chance of complete elimination 
          and prevents reinfection cycles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Essential DO's</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">💊 Medication Protocol</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Treat all household members simultaneously, even if symptom-free</li>
                <li>• Take the second dose exactly 14 days after the first</li>
                <li>• Complete the full treatment course as prescribed</li>
                <li>• Store medication properly and check expiration dates</li>
                <li>• Consult healthcare provider for pregnant women or infants</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🚿 Daily Hygiene Routine</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Take morning showers to mechanically remove overnight eggs</li>
                <li>• Change underwear twice daily (morning and bedtime)</li>
                <li>• Wash hands thoroughly after bathroom use and before meals</li>
                <li>• Keep fingernails short and clean</li>
                <li>• Use personal towels and wash them frequently</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🧺 Laundry & Cleaning</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Wash all bedding, underwear, and pajamas in hot water (60°C/140°F)</li>
                <li>• Dry on high heat setting or in direct sunlight</li>
                <li>• Clean bathroom surfaces daily with disinfectant</li>
                <li>• Vacuum carpets and upholstery, dispose of bag immediately</li>
                <li>• Wipe down high-touch surfaces (doorknobs, light switches)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Critical DON'Ts</h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">💊 Medication Mistakes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Don't skip the second dose - it's critical for breaking the lifecycle</li>
                <li>• Don't treat only symptomatic family members</li>
                <li>• Don't stop treatment early even if symptoms improve</li>
                <li>• Don't share medication between family members without proper dosing</li>
                <li>• Don't ignore potential drug interactions</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🚫 Hygiene Mistakes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Don't shake bedding or clothing - this spreads eggs</li>
                <li>• Don't scratch the anal area - use anti-itch cream instead</li>
                <li>• Don't bite fingernails or put fingers in mouth</li>
                <li>• Don't share towels, washcloths, or personal items</li>
                <li>• Don't neglect morning hygiene routine</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">🏠 Environmental Mistakes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Don't use cold water for washing contaminated items</li>
                <li>• Don't air-dry underwear and bedding indoors</li>
                <li>• Don't vacuum without immediately disposing of the bag</li>
                <li>• Don't forget to clean under fingernails daily</li>
                <li>• Don't allow pets on beds during treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-blue-800 mb-6">📅 Week-by-Week Treatment Protocol</h3>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-3">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              <h4 className="font-semibold text-blue-800">Week 1: Initiation</h4>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Administer first medication dose to all household members</li>
              <li>✅ Begin strict hygiene protocol immediately</li>
              <li>✅ Start environmental cleaning and laundry routine</li>
              <li>✅ Educate all family members about protocols</li>
              <li>⚠️ Symptoms may temporarily worsen as worms die</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-3">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              <h4 className="font-semibold text-green-800">Week 2: Maintenance</h4>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Continue all hygiene measures consistently</li>
              <li>✅ Maintain environmental cleaning routine</li>
              <li>✅ Monitor for symptom improvement</li>
              <li>✅ Prepare for second medication dose</li>
              <li>📈 Most symptoms should begin improving</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center mb-3">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              <h4 className="font-semibold text-yellow-800">Week 3: Second Dose</h4>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>💊 Administer second medication dose (Day 14)</li>
              <li>✅ Continue all hygiene protocols</li>
              <li>✅ Intensify environmental cleaning</li>
              <li>✅ Replace toothbrushes and personal items</li>
              <li>📉 Symptoms should be significantly reduced</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center mb-3">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              <h4 className="font-semibold text-purple-800">Week 4: Recovery</h4>
            </div>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>👀 Monitor for any returning symptoms</li>
              <li>✅ Gradually reduce intensive cleaning measures</li>
              <li>✅ Maintain good hygiene habits</li>
              <li>🏥 Seek follow-up if symptoms persist</li>
              <li>🎉 Most cases should be completely resolved</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ When to Seek Medical Attention</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-700 mb-2">🚨 Immediate Medical Care</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Severe abdominal pain or cramping</li>
              <li>• Signs of allergic reaction to medication</li>
              <li>• High fever or signs of secondary infection</li>
              <li>• Persistent vomiting preventing medication retention</li>
              <li>• Unusual or severe symptoms in young children</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">📞 Follow-up Consultation</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Symptoms persist 2-3 weeks after second dose</li>
              <li>• New symptoms develop during treatment</li>
              <li>• Questions about medication interactions</li>
              <li>• Concerns about treatment in pregnant women</li>
              <li>• Repeated reinfections despite proper treatment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">🔄 Preventing Reinfection</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">🏠 Household Measures</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Maintain improved hygiene habits long-term</li>
              <li>• Regular cleaning of high-touch surfaces</li>
              <li>• Proper handwashing education for all family members</li>
              <li>• Monitor for symptoms in household members</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">👶 Child-Specific Prevention</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Teach proper bathroom hygiene</li>
              <li>• Discourage nail-biting and thumb-sucking</li>
              <li>• Regular nail trimming and cleaning</li>
              <li>• Supervise handwashing until habits are established</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">🌍 Community Awareness</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Inform close contacts if appropriate</li>
              <li>• Support school hygiene education</li>
              <li>• Share knowledge about prevention</li>
              <li>• Reduce stigma through education</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-4">🎯 Success Indicators</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Treatment Success Signs</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Complete resolution of itching within 2-3 weeks</li>
              <li>• No visible worms in stool or underwear</li>
              <li>• Improved sleep quality and reduced irritability</li>
              <li>• No new symptoms in household members</li>
              <li>• Successful completion of full medication course</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Long-term Success</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• No symptom recurrence after 4-6 weeks</li>
              <li>• Established good hygiene habits in family</li>
              <li>• Improved understanding of prevention</li>
              <li>• Confidence in managing future health challenges</li>
              <li>• Return to normal daily activities and routines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pinworm Guide</h1>
              <p className="text-gray-600 mt-1">Comprehensive treatment and management resource</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Evidence-based guidance</div>
              <div className="text-sm text-gray-500">International protocols</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'management' && renderManagement()}
        {activeTab === 'family' && renderFamilyLife()}
        {activeTab === 'intimacy' && renderIntimacy()}
        {activeTab === 'activities' && renderActivities()}
        {activeTab === 'natural' && renderNatural()}
        {activeTab === 'guidelines' && renderGuidelines()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              This guide provides educational information and should not replace professional medical advice.
            </p>
            <p className="text-gray-500 text-sm">
              Always consult with healthcare providers for diagnosis and treatment decisions.
            </p>
          </div>
        </div>
      </footer>
      
      <Analytics />
    </div>
  )
}

export default App

