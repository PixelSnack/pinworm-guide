import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Users,
  Baby,
  GraduationCap,
  Briefcase,
  Activity,
  Leaf,
  AlertTriangle,
  Clock,
  CheckCircle,
  Info,
  Shield,
  Home,
  Pill,
  Target,
  Zap,
  User,
  Calendar,
  Utensils,
  Dumbbell,
  Plane,
  Building
} from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [openSections, setOpenSections] = useState({})
  const [showAdultContent, setShowAdultContent] = useState(false)

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const AdultContentWarning = ({ children }) => {
    if (!showAdultContent) {
      return (
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <div className="space-y-4">
              <p className="font-semibold">Adult Content Warning</p>
              <p>This section contains mature content about intimacy during pinworm treatment. It's intended for adults and provides important health guidance for couples.</p>
              <Button 
                onClick={() => setShowAdultContent(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                I am 18+ and want to view this content
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )
    }
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Intimacy During Pinworm Treatment</h2>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowAdultContent(false)}
          >
            Hide Content
          </Button>
        </div>
        {children}
      </div>
    )
  }

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Info,
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Understanding Pinworms
              </CardTitle>
              <CardDescription>
                Pinworms (Enterobius vermicularis) are the most common intestinal parasite in developed countries, 
                affecting millions of people worldwide. These small, white worms primarily affect children but can 
                infect anyone in close contact.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">✅ Key Facts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Most common in children aged 5-10</li>
                      <li>• Highly contagious within households</li>
                      <li>• Not dangerous but very uncomfortable</li>
                      <li>• Easily treatable with proper medication</li>
                      <li>• Reinfection is common without proper hygiene</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <CardTitle className="text-yellow-800 text-lg">⚠️ Common Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Intense anal itching, especially at night</li>
                      <li>• Restless sleep and irritability</li>
                      <li>• Visible white threads in stool or underwear</li>
                      <li>• Abdominal discomfort</li>
                      <li>• In girls: vaginal itching or discharge</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-800">Transmission & Lifecycle</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <h4 className="font-semibold text-red-800 mb-2">Why Household Treatment is Critical</h4>
                  <p className="text-gray-700 mb-4">
                    All household members must be treated simultaneously, even if symptom-free. Many people, 
                    especially in early stages, don't notice obvious symptoms. The microscopic eggs can survive 
                    on surfaces for up to 3 weeks and are easily transferred between family members.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-red-700 mb-2">What Kills Pinworm Eggs:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Hot water (60°C/140°F or higher)</li>
                        <li>• Soap and thorough washing</li>
                        <li>• Disinfectants and cleaning products</li>
                        <li>• High heat from dryers</li>
                        <li>• UV light from sunlight</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-red-700 mb-2">What Doesn't Kill Eggs:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Hand sanitizer alone</li>
                        <li>• Cold water washing</li>
                        <li>• Air fresheners</li>
                        <li>• Vacuum cleaning alone</li>
                      </ul>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'management',
      title: 'Management',
      icon: Pill,
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-blue-600" />
                5-Phase Management Approach
              </CardTitle>
              <CardDescription>
                Successful pinworm treatment requires a comprehensive approach combining medication, 
                hygiene protocols, and environmental control. This systematic method ensures complete 
                elimination and prevents reinfection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Phase 1: Immediate Treatment</h3>
                    <p className="text-sm text-gray-700">Administer medication to all household members simultaneously</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-green-800 mb-2">Phase 2: Hygiene Protocol</h3>
                    <p className="text-sm text-gray-700">Implement strict personal and household hygiene measures</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-yellow-500">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">Phase 3: Environmental Control</h3>
                    <p className="text-sm text-gray-700">Deep clean and disinfect all surfaces and textiles</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Phase 4: Second Treatment</h3>
                    <p className="text-sm text-gray-700">Administer second dose after 14 days to break lifecycle</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-red-800 mb-2">Phase 5: Monitoring</h3>
                    <p className="text-sm text-gray-700">Watch for symptoms and maintain preventive measures</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-800">Medication Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">Mebendazole (Vermox)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Mechanism:</strong> Blocks glucose uptake in worms, causing energy depletion and death</p>
                    <p><strong>Dosage:</strong> 100mg single dose, repeat after 14 days</p>
                    <p><strong>Effectiveness:</strong> 90-95% cure rate with proper dosing</p>
                    <p><strong>Side Effects:</strong> Minimal - occasional mild stomach upset</p>
                    <p><strong>Age Limit:</strong> Safe for children over 2 years</p>
                    <p><strong>Availability:</strong> Over-the-counter in most countries</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Albendazole (Zentel)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Mechanism:</strong> Disrupts microtubule formation, preventing cell division</p>
                    <p><strong>Dosage:</strong> 400mg single dose, repeat after 14 days</p>
                    <p><strong>Effectiveness:</strong> 85-90% cure rate, slightly lower than mebendazole</p>
                    <p><strong>Side Effects:</strong> Rare - headache, dizziness, nausea</p>
                    <p><strong>Age Limit:</strong> Safe for children over 1 year</p>
                    <p><strong>Availability:</strong> Prescription required in most countries</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Pyrantel Pamoate (Pin-X)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Mechanism:</strong> Paralyzes worms by blocking neuromuscular transmission</p>
                    <p><strong>Dosage:</strong> 11mg/kg single dose, repeat after 14 days</p>
                    <p><strong>Effectiveness:</strong> 80-85% cure rate, good alternative option</p>
                    <p><strong>Side Effects:</strong> Mild - nausea, stomach cramps, diarrhea</p>
                    <p><strong>Age Limit:</strong> Safe for children over 2 years</p>
                    <p><strong>Availability:</strong> Over-the-counter, liquid form available</p>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-yellow-200 bg-yellow-50 mb-6">
                <Info className="h-4 w-4 text-yellow-600" />
                <AlertDescription>
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
                </AlertDescription>
              </Alert>

              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <h4 className="font-semibold text-red-800 mb-2">Critical Treatment Guidelines</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>All household members must be treated simultaneously, even if symptom-free</li>
                    <li>Intimate partners should be treated even if living separately</li>
                    <li>Complete the full course - single doses are often insufficient</li>
                    <li>Maintain strict hygiene throughout the entire treatment period</li>
                    <li>Consult healthcare provider for pregnant women, infants under 2, or immunocompromised individuals</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Treatment Timeline & Expectations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-blue-500 text-white mr-2">1</Badge>
                      <h4 className="font-semibold text-blue-800">Week 1</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Initial Treatment</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Take first medication dose</li>
                      <li>• Begin strict hygiene protocol</li>
                      <li>• Start environmental cleaning</li>
                      <li>• Symptoms may initially worsen</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-green-500 text-white mr-2">2</Badge>
                      <h4 className="font-semibold text-green-800">Week 2</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Continue Protocol</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Maintain hygiene measures</li>
                      <li>• Symptoms should start improving</li>
                      <li>• Continue environmental control</li>
                      <li>• Prepare for second dose</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-yellow-500 text-white mr-2">3</Badge>
                      <h4 className="font-semibold text-yellow-800">Week 3</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Second Dose</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Take second medication dose</li>
                      <li>• Critical for breaking lifecycle</li>
                      <li>• Continue all hygiene measures</li>
                      <li>• Most symptoms should be resolved</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-purple-500 text-white mr-2">4</Badge>
                      <h4 className="font-semibold text-purple-800">Week 4</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Recovery & Monitoring</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Monitor for any returning symptoms</li>
                      <li>• Gradually relax strict measures</li>
                      <li>• Maintain good hygiene habits</li>
                      <li>• Seek follow-up if needed</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'family',
      title: 'Family Life',
      icon: Users,
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Managing Family Dynamics During Treatment
              </CardTitle>
              <CardDescription>
                Pinworm treatment affects the entire household and requires coordination across different age groups, 
                living situations, and family dynamics. Success depends on everyone understanding their role and 
                maintaining consistent protocols.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Young Children (Ages 2-7)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-green-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-green-700 mb-2">Daily Supervision Needs</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Supervised handwashing after bathroom use and before meals</li>
                      <li>• Help with morning showers to mechanically remove overnight eggs</li>
                      <li>• Assistance with underwear changes (morning and bedtime)</li>
                      <li>• Nail trimming and cleaning supervision</li>
                      <li>• Gentle reminders not to scratch</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-yellow-700 mb-2">Age-Appropriate Explanations</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• "Tiny bugs in your tummy that make you itchy"</li>
                      <li>• "Special medicine to make the bugs go away"</li>
                      <li>• "Extra washing to keep the bugs from coming back"</li>
                      <li>• Focus on positive reinforcement for good hygiene</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  School-Age Children (Ages 8-12)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-blue-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Building Independence</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Teach proper handwashing technique with supervision</li>
                      <li>• Encourage self-monitoring of hygiene habits</li>
                      <li>• Involve in laundry sorting and bedding changes</li>
                      <li>• Create hygiene checklists they can follow</li>
                      <li>• Explain the importance without causing anxiety</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-yellow-700 mb-2">School Considerations</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pack hand sanitizer for school use</li>
                      <li>• Remind about bathroom hygiene at school</li>
                      <li>• Consider informing close friends' parents</li>
                      <li>• No need to keep child home during treatment</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Teenagers (Ages 13+)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-purple-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Privacy & Independence</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Provide clear, factual information about the condition</li>
                      <li>• Respect their need for privacy while ensuring compliance</li>
                      <li>• Allow them to manage their own hygiene with check-ins</li>
                      <li>• Address any embarrassment or social concerns</li>
                      <li>• Involve them in household cleaning efforts</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-red-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-red-700 mb-2">Social Considerations</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Discuss discretion about sharing with friends</li>
                      <li>• Address concerns about sleepovers or social activities</li>
                      <li>• Emphasize that it's common and not their fault</li>
                      <li>• Support them through any social anxiety</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Mixed-Age Households
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-yellow-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-yellow-700 mb-2">Coordination Strategies</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Assign age-appropriate responsibilities to older children</li>
                      <li>• Create family hygiene schedules and checklists</li>
                      <li>• Use older siblings as positive role models</li>
                      <li>• Ensure consistent messaging across age groups</li>
                      <li>• Plan family activities that support treatment goals</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-green-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-green-700 mb-2">Shared Spaces Management</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Coordinate bathroom schedules for morning showers</li>
                      <li>• Manage shared bedrooms and play areas</li>
                      <li>• Organize laundry to prevent cross-contamination</li>
                      <li>• Create designated areas for clean clothes</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-red-800">🏠 Special Family Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-red-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-red-700 mb-3">Custody Arrangements</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Communication:</strong> Both parents must be informed and coordinate treatment</li>
                      <li>• <strong>Medication:</strong> Ensure both households have medication and understand timing</li>
                      <li>• <strong>Hygiene:</strong> Consistent protocols must be maintained at both homes</li>
                      <li>• <strong>Supplies:</strong> Provide hygiene supplies for both households</li>
                      <li>• <strong>Documentation:</strong> Share treatment timeline and progress notes</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-orange-700 mb-3">Extended Family Living</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Grandparents:</strong> May need extra support understanding modern treatment</li>
                      <li>• <strong>Multiple Families:</strong> Coordinate treatment across all family units</li>
                      <li>• <strong>Shared Facilities:</strong> Extra attention to bathroom and laundry protocols</li>
                      <li>• <strong>Cultural Considerations:</strong> Respect different approaches while maintaining medical standards</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <h3 className="font-semibold text-green-800 mb-4">💡 Family Success Tips</h3>
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
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      id: 'intimacy',
      title: 'Intimacy',
      icon: Heart,
      content: (
        <AdultContentWarning>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Intimacy During Pinworm Treatment</CardTitle>
                <CardDescription>
                  Maintaining intimacy during pinworm treatment requires understanding transmission risks 
                  and implementing appropriate precautions. This guidance helps couples navigate physical 
                  intimacy safely while ensuring effective treatment.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-800">✅ Safe Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Card className="bg-green-50">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-green-700 mb-2">Low-Risk Intimate Activities</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Kissing and upper body contact</li>
                        <li>• Non-genital intimate touching</li>
                        <li>• Vaginal intercourse with proper hygiene</li>
                        <li>• Mutual masturbation with clean hands</li>
                        <li>• Intimate activities after morning showers</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-blue-700 mb-2">Timing Recommendations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Best after morning showers (removes overnight eggs)</li>
                        <li>• Avoid late evening activities (peak egg-laying time)</li>
                        <li>• Wait 24-48 hours after first medication dose</li>
                        <li>• Resume normal activities after second dose</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-800">⚠️ High-Risk Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Card className="bg-red-50">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-red-700 mb-2">Activities to Avoid</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Anal contact or intercourse</li>
                        <li>• Oral-anal contact (rimming)</li>
                        <li>• Any contact with the anal area</li>
                        <li>• Sharing unwashed sex toys</li>
                        <li>• Intimate contact without prior hygiene</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-yellow-50">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Why These Restrictions Matter</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Anal area has highest concentration of eggs</li>
                        <li>• Direct transmission risk to partner</li>
                        <li>• Can reinfect treated individual</li>
                        <li>• Compromises treatment effectiveness</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800">💕 Practical Guidelines for Couples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Card className="bg-purple-50">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-purple-700 mb-2">Before Intimacy</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Both partners shower thoroughly</li>
                          <li>• Wash hands and trim fingernails</li>
                          <li>• Put on fresh, clean underwear</li>
                          <li>• Ensure bedroom has clean linens</li>
                          <li>• Have clean towels readily available</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-blue-700 mb-2">During Intimacy</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Maintain focus on low-risk activities</li>
                          <li>• Avoid touching anal area completely</li>
                          <li>• Wash hands if contact occurs accidentally</li>
                          <li>• Use barriers (condoms) if preferred</li>
                          <li>• Communicate openly about comfort levels</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="bg-green-50">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-green-700 mb-2">After Intimacy</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Both partners wash hands thoroughly</li>
                          <li>• Clean genital areas with soap and water</li>
                          <li>• Change into fresh underwear</li>
                          <li>• Wash any used towels or linens</li>
                          <li>• Maintain regular hygiene routine</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-yellow-50">
                      <CardContent className="pt-4">
                        <h4 className="font-semibold text-yellow-700 mb-2">Partner Treatment</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Treat all household members and intimate partners simultaneously</li>
                          <li>• Partners should take medication even if symptom-free</li>
                          <li>• Coordinate treatment timing between households</li>
                          <li>• Both partners follow hygiene protocols</li>
                          <li>• Monitor each other for symptoms</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="border-green-200 bg-green-50">
              <Heart className="h-4 w-4 text-green-600" />
              <AlertDescription>
                <h3 className="font-semibold text-green-800 mb-4">🌟 Maintaining Connection During Treatment</h3>
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
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription>
                <h3 className="font-semibold text-red-800 mb-4">⚠️ Important Medical Considerations</h3>
                <div className="space-y-4">
                  <Card className="bg-white">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-red-700 mb-2">When to Seek Medical Advice</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• If symptoms persist after completing treatment</li>
                        <li>• If partner develops symptoms during treatment</li>
                        <li>• For pregnancy-related treatment questions</li>
                        <li>• If unusual symptoms or reactions occur</li>
                        <li>• For guidance on complex family situations</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-yellow-50">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Remember</h4>
                      <p className="text-sm text-gray-700">
                        Pinworm infections are common, treatable, and not a reflection of personal hygiene. 
                        Open communication with your partner and following medical guidance will ensure 
                        successful treatment while maintaining your relationship's intimacy and connection.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </AdultContentWarning>
      )
    },
    {
      id: 'activities',
      title: 'Activities',
      icon: Activity,
      content: (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Maintaining Normal Activities During Treatment
              </CardTitle>
              <CardDescription>
                Pinworm treatment doesn't require isolation or major lifestyle changes. With proper hygiene 
                precautions, most daily activities can continue normally. The key is understanding which 
                activities need extra attention and which are perfectly safe.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-800">✅ Safe Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-green-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Work & School
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Continue normal attendance - no isolation needed</li>
                      <li>• Maintain regular handwashing throughout the day</li>
                      <li>• Pack hand sanitizer for frequent use</li>
                      <li>• Avoid sharing food or drinks with others</li>
                      <li>• Use personal towels in workplace bathrooms</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      Swimming

