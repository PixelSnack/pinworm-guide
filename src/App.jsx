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

  const SectionCard = ({ children, className = "" }) => (
    <Card className={`mb-6 ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Analytics />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complete Pinworm Management Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A practical, evidence-based guide for families, couples, and individuals worldwide. Living normally during treatment.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
              <span>Comprehensive treatment and management resource</span>
              <span>•</span>
              <span>Evidence-based guidance</span>
              <span>•</span>
              <span>International protocols</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Pill className="h-4 w-4" />
              Management
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Family Life
            </TabsTrigger>
            <TabsTrigger value="intimacy" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Intimacy
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="natural" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Natural Approaches
            </TabsTrigger>
          </TabsList>

          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-6">
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-blue-600" />
                Understanding Pinworms
              </h2>
              <p className="text-gray-700 mb-6">
                Pinworms (Enterobius vermicularis) are the most common intestinal parasite in developed countries, 
                affecting millions of people worldwide. These small, white worms primarily affect children but can 
                infect anyone in close contact.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold text-green-800 mb-4">✅ Key Facts</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Most common in children aged 5-10</li>
                    <li>• Highly contagious within households</li>
                    <li>• Not dangerous but very uncomfortable</li>
                    <li>• Easily treatable with proper medication</li>
                    <li>• Reinfection is common without proper hygiene</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 border-l-4 border-l-yellow-500">
                  <h3 className="font-semibold text-yellow-800 mb-4">⚠️ Common Symptoms</h3>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Intense anal itching, especially at night</li>
                    <li>• Restless sleep and irritability</li>
                    <li>• Visible white threads in stool or underwear</li>
                    <li>• Abdominal discomfort</li>
                    <li>• In girls: vaginal itching or discharge</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                <h3 className="font-semibold text-red-800 mb-4">🚨 Why Household Treatment is Critical</h3>
                <p className="text-gray-700 mb-4">
                  All household members must be treated simultaneously, even if symptom-free. Many people, 
                  especially in early stages, don't notice obvious symptoms. The microscopic eggs can survive 
                  on surfaces for up to 3 weeks and are easily transferred between family members.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">What Kills Pinworm Eggs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hot water (60°C/140°F or higher)</li>
                      <li>• Soap and thorough washing</li>
                      <li>• Disinfectants and cleaning products</li>
                      <li>• High heat from dryers</li>
                      <li>• UV light from sunlight</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
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
            </SectionCard>
          </TabsContent>

          {/* Management Section */}
          <TabsContent value="management" className="space-y-6">
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Pill className="h-6 w-6 text-blue-600" />
                Treatment Timeline & Medication
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Week 1</div>
                  <div className="text-sm font-semibold text-blue-800">Initial Treatment</div>
                  <div className="text-xs text-gray-600 mt-2">First dose + hygiene protocol</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Week 2</div>
                  <div className="text-sm font-semibold text-green-800">Continue Protocol</div>
                  <div className="text-xs text-gray-600 mt-2">Maintain all measures</div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Week 3</div>
                  <div className="text-sm font-semibold text-yellow-800">Second Dose</div>
                  <div className="text-xs text-gray-600 mt-2">Critical for breaking lifecycle</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Week 4</div>
                  <div className="text-sm font-semibold text-purple-800">Recovery</div>
                  <div className="text-xs text-gray-600 mt-2">Monitor & maintain</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-3">Mebendazole (Vermox)</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Effectiveness:</strong> 90-95% cure rate</p>
                    <p><strong>Dosage:</strong> 100mg, repeat after 14 days</p>
                    <p><strong>Side Effects:</strong> Minimal stomach upset</p>
                    <p><strong>Age:</strong> Safe for children 2+</p>
                    <p><strong>Availability:</strong> Over-the-counter</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">Albendazole (Zentel)</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Effectiveness:</strong> 85-90% cure rate</p>
                    <p><strong>Dosage:</strong> 400mg, repeat after 14 days</p>
                    <p><strong>Side Effects:</strong> Rare headache, nausea</p>
                    <p><strong>Age:</strong> Safe for children 1+</p>
                    <p><strong>Availability:</strong> Prescription required</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3">Pyrantel Pamoate</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Effectiveness:</strong> 80-85% cure rate</p>
                    <p><strong>Dosage:</strong> 11mg/kg, repeat after 14 days</p>
                    <p><strong>Side Effects:</strong> Mild stomach upset</p>
                    <p><strong>Age:</strong> Safe for children 2+</p>
                    <p><strong>Availability:</strong> Over-the-counter</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-4">International Treatment Protocols</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2">Standard Protocol (Most Countries):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Day 0: First dose to all household members</li>
                      <li>• Day 14: Second dose to all household members</li>
                      <li>• Monitor for 2-4 weeks after final dose</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2">Enhanced Protocol (Some Regions):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Day 0: First dose</li>
                      <li>• Day 14: Second dose</li>
                      <li>• Day 28: Third dose (Denmark, Nordic countries)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          {/* Family Life Section */}
          <TabsContent value="family" className="space-y-6">
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Managing Family Dynamics During Treatment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    Young Children (Ages 2-7)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Daily Supervision Needs</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Supervised handwashing after bathroom use</li>
                        <li>• Help with morning showers</li>
                        <li>• Assistance with underwear changes</li>
                        <li>• Nail trimming and cleaning supervision</li>
                        <li>• Gentle reminders not to scratch</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Age-Appropriate Explanations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Tiny bugs that make you itchy"</li>
                        <li>• "Special medicine to make bugs go away"</li>
                        <li>• "Extra washing keeps bugs away"</li>
                        <li>• Focus on positive reinforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 border-l-4 border-l-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    School-Age Children (Ages 8-12)
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Building Independence</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Teach proper handwashing technique</li>
                        <li>• Encourage self-monitoring habits</li>
                        <li>• Involve in laundry and cleaning</li>
                        <li>• Create hygiene checklists</li>
                        <li>• Explain importance without anxiety</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">School Considerations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pack hand sanitizer for school</li>
                        <li>• Remind about bathroom hygiene</li>
                        <li>• Consider informing close friends' parents</li>
                        <li>• No need to keep child home</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500 mt-6">
                <h3 className="font-semibold text-red-800 mb-4">Special Family Situations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Custody Arrangements</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Both parents must coordinate treatment</li>
                      <li>• Ensure both households have medication</li>
                      <li>• Consistent protocols at both homes</li>
                      <li>• Share treatment timeline and progress</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Extended Family Living</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Coordinate across all family units</li>
                      <li>• Extra attention to shared facilities</li>
                      <li>• Respect cultural differences</li>
                      <li>• Maintain medical standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          {/* Intimacy Section */}
          <TabsContent value="intimacy" className="space-y-6">
            <AdultContentWarning>
              <SectionCard>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                    <h3 className="font-semibold text-green-800 mb-4">✅ Safe Activities</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Low-Risk Intimate Activities</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Kissing and upper body contact</li>
                          <li>• Non-genital intimate touching</li>
                          <li>• Vaginal intercourse with proper hygiene</li>
                          <li>• Mutual masturbation with clean hands</li>
                          <li>• Activities after morning showers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Timing Recommendations</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Best after morning showers</li>
                          <li>• Avoid late evening activities</li>
                          <li>• Wait 24-48 hours after first dose</li>
                          <li>• Resume normal after second dose</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                    <h3 className="font-semibold text-red-800 mb-4">⚠️ High-Risk Activities</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Activities to Avoid</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Anal contact or intercourse</li>
                          <li>• Oral-anal contact (rimming)</li>
                          <li>• Any contact with anal area</li>
                          <li>• Sharing unwashed sex toys</li>
                          <li>• Contact without prior hygiene</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Why These Restrictions Matter</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Anal area has highest egg concentration</li>
                          <li>• Direct transmission risk to partner</li>
                          <li>• Can reinfect treated individual</li>
                          <li>• Compromises treatment effectiveness</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 border-l-4 border-l-purple-500 mt-6">
                  <h3 className="font-semibold text-purple-800 mb-4">💕 Practical Guidelines for Couples</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Before Intimacy</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Both partners shower thoroughly</li>
                        <li>• Wash hands and trim fingernails</li>
                        <li>• Put on fresh, clean underwear</li>
                        <li>• Ensure clean linens</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">During Intimacy</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Focus on low-risk activities</li>
                        <li>• Avoid anal area completely</li>
                        <li>• Wash hands if contact occurs</li>
                        <li>• Communicate openly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">After Intimacy</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Both partners wash hands</li>
                        <li>• Clean genital areas</li>
                        <li>• Change into fresh underwear</li>
                        <li>• Wash used linens</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionCard>
            </AdultContentWarning>
          </TabsContent>

          {/* Activities Section */}
          <TabsContent value="activities" className="space-y-6">
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="h-6 w-6 text-blue-600" />
                Maintaining Normal Activities During Treatment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold text-green-800 mb-4">✅ Safe Activities</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Work & School
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Continue normal attendance</li>
                        <li>• Maintain regular handwashing</li>
                        <li>• Pack hand sanitizer</li>
                        <li>• Avoid sharing food or drinks</li>
                        <li>• Use personal towels</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Swimming
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Swimming is completely safe</li>
                        <li>• Chlorine kills pinworm eggs instantly</li>
                        <li>• Shower before and after swimming</li>
                        <li>• Change into clean, dry clothes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <Dumbbell className="h-4 w-4" />
                        Exercise & Sports
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• All physical activities are safe</li>
                        <li>• Shower immediately after exercise</li>
                        <li>• Wash workout clothes in hot water</li>
                        <li>• Use personal towels and equipment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 border-l-4 border-l-yellow-500">
                  <h3 className="font-semibold text-yellow-800 mb-4">⚠️ Activities Requiring Extra Care</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        Travel
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pack extra hygiene supplies</li>
                        <li>• Maintain medication schedule</li>
                        <li>• Bring hand sanitizer</li>
                        <li>• Pack extra underwear and clothes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Social Activities
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sleepovers: inform host parents</li>
                        <li>• Playdates: maintain hygiene</li>
                        <li>• Parties: avoid sharing food</li>
                        <li>• Group activities: use personal items</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Public Spaces
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wash hands frequently</li>
                        <li>• Avoid touching face</li>
                        <li>• Use hand sanitizer regularly</li>
                        <li>• Be extra careful in bathrooms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          {/* Natural Approaches Section */}
          <TabsContent value="natural" className="space-y-6">
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-blue-600" />
                Natural Approaches
              </h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Important:</h3>
                    <p className="text-sm text-yellow-700">
                      Natural approaches should complement, not replace, proven medical treatment. Always consult healthcare 
                      providers before making significant dietary or supplement changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold text-green-800 mb-4">🍽️ Potentially Helpful Foods</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pumpkin seeds: 1-2 handfuls daily</h4>
                      <p className="text-sm text-gray-700">
                        Contains cucurbitacin compounds that may affect parasite motility. Studies show 69-75% reduction 
                        in some parasites, though pinworm-specific research is limited.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Garlic: Fresh garlic in cooking</h4>
                      <p className="text-sm text-gray-700">
                        Allicin compounds disrupt parasite cell membranes. Most effective when crushed fresh. Proven 
                        against protozoa like Giardia and Entamoeba.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Probiotic foods: Yogurt, kefir, fermented vegetables</h4>
                      <p className="text-sm text-gray-700">
                        Strengthen gut barrier and immune response. Beneficial bacteria produce antimicrobial compounds 
                        and compete with parasites for resources.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">High-fiber foods: Support regular bowel movements</h4>
                      <p className="text-sm text-gray-700">
                        Support beneficial bacteria growth, enhance mucus production, and improve intestinal transit to 
                        help eliminate parasites naturally.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                  <h3 className="font-semibold text-red-800 mb-4">🚫 Foods to Limit</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Excess sugar and refined carbohydrates</h4>
                      <p className="text-sm text-gray-700">
                        Disrupt gut microbiome balance and may suppress immune function, potentially hindering 
                        recovery.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Processed foods during treatment</h4>
                      <p className="text-sm text-gray-700">
                        Often lack essential nutrients and contain additives that may disrupt beneficial gut bacteria.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Foods that trigger digestive symptoms</h4>
                      <p className="text-sm text-gray-700">
                        Individual sensitivities may worsen discomfort during treatment. Focus on easily digestible, 
                        nutrient-dense foods.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Undercooked meat and fish</h4>
                      <p className="text-sm text-gray-700">
                        Risk of additional parasitic infections while immune system is managing current condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 border-l-4 border-l-blue-500 mt-6">
                <h3 className="font-semibold text-blue-800 mb-4">🔬 Scientific Note</h3>
                <p className="text-sm text-gray-700">
                  While traditional use supports these approaches, peer-reviewed research specifically on pinworms is limited. 
                  These foods may provide general immune and digestive support during treatment.
                </p>
              </div>
            </SectionCard>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              This guide provides general information and should not replace professional medical advice.
              Always consult healthcare providers for diagnosis and treatment decisions.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: 2025 | For educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

