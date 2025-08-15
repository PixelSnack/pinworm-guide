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
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Adult Intimacy Guidelines</h3>
            <Badge variant="secondary" className="mb-3">Adults Only</Badge>
            <p className="text-orange-700 mb-4">
              This section contains guidance for adult relationships during treatment.
            </p>
            <Button
              onClick={() => setShowAdultContent(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
            >
              View Adult Content
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Information Banner */}
            <Alert className="border-blue-200 bg-blue-50 border-l-4 border-l-blue-500">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Pinworms affect millions of people worldwide annually. This is a common, highly treatable condition that occurs across all socioeconomic levels and geographic regions.
              </AlertDescription>
            </Alert>

            {/* Understanding Pinworms Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-blue-500">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Understanding Pinworms
              </h2>
              <p className="text-gray-700 mb-4">
                Pinworms are tiny white parasitic worms (about the size of a staple) that live in your intestines. Female worms crawl out at night to lay microscopic, sticky eggs around the anal area. These eggs become infectious within 6 hours and can survive on surfaces for 2-3 weeks.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">The Transmission Cycle:</h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>You accidentally swallow eggs (through hand-to-mouth contact)</li>
                <li>Eggs hatch in your small intestine</li>
                <li>Worms mature in your large intestine over 2-6 weeks</li>
                <li>Females lay new eggs around your anus</li>
                <li>Cycle repeats</li>
              </ol>

              {/* Side-by-side comparison boxes */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-800 mb-3">What Kills Pinworm Eggs:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Hot water (60°C/140°F or higher)</li>
                    <li>• Regular soap and water</li>
                    <li>• Household disinfectants with alcohol or bleach</li>
                    <li>• High heat from dryers (40+ minutes)</li>
                    <li>• Direct sunlight (UV exposure)</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
                  <h4 className="font-semibold text-red-800 mb-3">What Doesn't Kill Eggs:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Hand sanitizer alone</li>
                    <li>• Cold or lukewarm water</li>
                    <li>• Air fresheners</li>
                    <li>• Surface sprays without disinfectant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'management':
        return (
          <div className="space-y-6">
            {/* Phase-based Management Cards */}
            <div className="space-y-4">
              {[
                {
                  phase: 1,
                  title: "Immediate Treatment",
                  goal: "Eliminate active worms and prevent reinfection",
                  actions: [
                    "Take prescribed antiparasitic medication as directed",
                    "Begin strict hygiene protocol immediately",
                    "Wash all bedding and clothing in hot water",
                    "Trim fingernails short and keep clean"
                  ]
                },
                {
                  phase: 2,
                  title: "Environmental Control",
                  goal: "Remove eggs from living environment",
                  actions: [
                    "Vacuum carpets and furniture thoroughly",
                    "Disinfect bathroom surfaces daily",
                    "Change and wash bedding every 2-3 days",
                    "Clean toys and frequently touched surfaces"
                  ]
                },
                {
                  phase: 3,
                  title: "Family Protection",
                  goal: "Prevent spread to household members",
                  actions: [
                    "Consider treating all household members",
                    "Implement family hygiene protocols",
                    "Separate personal items (towels, washcloths)",
                    "Monitor family members for symptoms"
                  ]
                },
                {
                  phase: 4,
                  title: "Ongoing Prevention",
                  goal: "Maintain hygiene habits to prevent reinfection",
                  actions: [
                    "Continue thorough handwashing practices",
                    "Maintain regular cleaning schedule",
                    "Keep fingernails trimmed and clean",
                    "Shower in the morning to remove overnight eggs"
                  ]
                },
                {
                  phase: 5,
                  title: "Follow-up Care",
                  goal: "Ensure complete elimination and recovery",
                  actions: [
                    "Complete full course of medication",
                    "Schedule follow-up with healthcare provider if needed",
                    "Monitor for symptom resolution",
                    "Consider repeat treatment if symptoms persist"
                  ]
                }
              ].map((phase) => (
                <Card key={phase.phase} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {phase.phase}
                      </div>
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      Goal: {phase.goal}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.actions.map((action, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Medication Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-green-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-5 w-5 text-green-600" />
                Medication Information
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {[
                  {
                    name: "Mebendazole",
                    dosage: "100mg",
                    schedule: "Single dose, repeat after 2 weeks",
                    notes: "Most commonly prescribed, available over-the-counter in many countries"
                  },
                  {
                    name: "Albendazole", 
                    dosage: "400mg",
                    schedule: "Single dose, repeat after 2 weeks", 
                    notes: "Alternative option, prescription required in most countries"
                  },
                  {
                    name: "Pyrantel Pamoate",
                    dosage: "11mg/kg",
                    schedule: "Single dose, repeat after 2 weeks",
                    notes: "Available over-the-counter, safe for children over 2 years"
                  }
                ].map((med, index) => (
                  <Card key={index} className="border-green-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-green-800">{med.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> {med.dosage}</p>
                      <p><strong>Schedule:</strong> {med.schedule}</p>
                      <p className="text-gray-600">{med.notes}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert className="border-blue-200 bg-blue-50 border-l-4 border-l-blue-500">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>International Treatment Timeline:</strong> Standard protocol is Day 0 and Day 14. Some countries (like Denmark) may recommend a third dose on Day 28 as regional variation. Always follow your healthcare provider's specific instructions.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        )

      case 'family':
        return (
          <div className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50 border-l-4 border-l-yellow-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Family-wide treatment and prevention strategies are essential for successful pinworm management.
              </AlertDescription>
            </Alert>

            {/* Age-specific sections */}
            <div className="space-y-4">
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5 text-purple-600" />
                    Children (Ages 2-12)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Hygiene Teaching & Implementation
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Make handwashing fun with songs or timers (20 seconds minimum)</p>
                      <p>• Use visual reminders and reward charts for consistent hygiene</p>
                      <p>• Supervise nail trimming and keep nails very short</p>
                      <p>• Teach not to scratch the anal area, redirect to telling an adult</p>
                      <p>• Use tight-fitting underwear and change daily</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Sleep & Comfort Management
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Use tight-fitting pajamas to prevent scratching during sleep</p>
                      <p>• Consider mittens or socks on hands for younger children</p>
                      <p>• Change bedding frequently and wash in hot water</p>
                      <p>• Shower in the morning to remove eggs laid overnight</p>
                      <p>• Maintain consistent bedtime routines for comfort</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      School & Social Considerations
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Children can attend school during treatment</p>
                      <p>• Pack individual snacks and discourage food sharing</p>
                      <p>• Send extra underwear and wipes in school bag</p>
                      <p>• Inform school nurse if symptoms are disruptive</p>
                      <p>• Emphasize handwashing before meals and after bathroom use</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Teenagers (Ages 13-18)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Privacy & Independence
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Respect need for privacy while ensuring treatment compliance</p>
                      <p>• Provide clear, factual information about the condition</p>
                      <p>• Allow independence in personal hygiene with guidance</p>
                      <p>• Address concerns about social stigma with reassurance</p>
                      <p>• Monitor emotional well-being during treatment</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Social & School Management
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Maintain normal social activities and school attendance</p>
                      <p>• Provide discrete hygiene supplies for school</p>
                      <p>• Address any anxiety about disclosure to friends</p>
                      <p>• Emphasize that this is a common, treatable condition</p>
                      <p>• Support continued participation in sports and activities</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    Household Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Family Treatment Strategy
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Consider treating all household members simultaneously</p>
                      <p>• Coordinate medication schedules for the entire family</p>
                      <p>• Implement household-wide hygiene protocols</p>
                      <p>• Assign cleaning responsibilities to prevent reinfection</p>
                      <p>• Monitor all family members for symptoms</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Environmental Control
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Wash all bedding and clothing in hot water (60°C/140°F)</p>
                      <p>• Vacuum carpets and upholstery thoroughly</p>
                      <p>• Disinfect bathroom surfaces daily</p>
                      <p>• Clean frequently touched surfaces (doorknobs, light switches)</p>
                      <p>• Maintain clean, organized living spaces</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'intimacy':
        return (
          <div className="space-y-6">
            <AdultContentWarning>
              <Alert className="border-pink-200 bg-pink-50 border-l-4 border-l-pink-500">
                <Heart className="h-4 w-4" />
                <AlertDescription>
                  Professional guidance for maintaining intimate relationships during pinworm treatment.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Safe Intimacy Practices
                  </h3>
                  <ul className="space-y-3 text-sm text-green-700">
                    <li>• Shower before and after intimate contact</li>
                    <li>• Maintain excellent hand hygiene</li>
                    <li>• Use barrier protection when appropriate</li>
                    <li>• Focus on non-genital intimate activities</li>
                    <li>• Communicate openly about comfort levels</li>
                    <li>• Consider partner treatment to prevent reinfection</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Higher Risk Activities
                  </h3>
                  <ul className="space-y-3 text-sm text-red-700">
                    <li>• Oral-anal contact (highest risk)</li>
                    <li>• Digital-anal contact without barriers</li>
                    <li>• Sharing unwashed intimate items</li>
                    <li>• Intimate contact without prior hygiene</li>
                    <li>• Activities involving the anal area</li>
                    <li>• Contact during active symptom periods</li>
                  </ul>
                </div>
              </div>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-blue-600" />
                    Relationship Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Communication & Support
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Discuss the condition openly and honestly with your partner</p>
                      <p>• Explain that pinworms are common and easily treatable</p>
                      <p>• Work together on prevention strategies</p>
                      <p>• Be patient with temporary lifestyle adjustments</p>
                      <p>• Focus on emotional intimacy during treatment</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Practical Guidelines
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Shower together as part of your hygiene routine</p>
                      <p>• Keep fingernails trimmed short for both partners</p>
                      <p>• Wash hands thoroughly before and after any intimate contact</p>
                      <p>• Consider simultaneous treatment for both partners</p>
                      <p>• Use fresh, clean bedding and sleepwear</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </AdultContentWarning>
          </div>
        )

      case 'activities':
        return (
          <div className="space-y-6">
            <Alert className="border-green-200 bg-green-50 border-l-4 border-l-green-500">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Most daily activities can continue normally during pinworm treatment with proper hygiene precautions.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    Work & Social Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Workplace Guidelines
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Continue normal work attendance</p>
                      <p>• Maintain excellent hand hygiene</p>
                      <p>• Avoid sharing food or eating utensils</p>
                      <p>• Keep personal items separate</p>
                      <p>• Use individual bathroom supplies when possible</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Social Interactions
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Maintain normal social activities</p>
                      <p>• Practice good hand hygiene before meals</p>
                      <p>• Avoid sharing personal items</p>
                      <p>• Be mindful of bathroom hygiene in public spaces</p>
                      <p>• No need to isolate or avoid social contact</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    Sports & Physical Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Exercise & Fitness
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Continue regular exercise routines</p>
                      <p>• Shower immediately after workouts</p>
                      <p>• Use personal towels and water bottles</p>
                      <p>• Avoid sharing gym equipment without cleaning</p>
                      <p>• Maintain good hygiene in locker rooms</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Swimming & Water Activities
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Swimming is generally safe with proper hygiene</p>
                      <p>• Shower before entering pools</p>
                      <p>• Avoid swallowing pool or recreational water</p>
                      <p>• Use personal towels and swimwear</p>
                      <p>• Change out of wet swimwear promptly</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-purple-600" />
                  Travel Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                    Travel Preparation
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                    <p>• Pack sufficient medication for the entire trip</p>
                    <p>• Bring extra hygiene supplies</p>
                    <p>• Research medical facilities at your destination</p>
                    <p>• Consider travel insurance for medical needs</p>
                    <p>• Pack hand sanitizer and disinfecting wipes</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                    During Travel
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                    <p>• Maintain medication schedule across time zones</p>
                    <p>• Practice extra hand hygiene in public spaces</p>
                    <p>• Use personal pillows and blankets when possible</p>
                    <p>• Be cautious with food and water in new locations</p>
                    <p>• Maintain regular hygiene routines despite schedule changes</p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>
        )

      case 'natural':
        return (
          <div className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50 border-l-4 border-l-yellow-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Natural approaches should complement, not replace, proven medical treatment. Always consult healthcare providers before making significant dietary or supplement changes.
              </AlertDescription>
            </Alert>

            {/* Enhanced Dietary Approaches Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-blue-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5 text-blue-600" />
                Dietary Approaches
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-800 mb-3">Potentially Helpful Foods:</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-green-700">• Pumpkin seeds: 1-2 handfuls daily</p>
                      <p className="text-green-600 text-xs ml-2">Contains cucurbitacin compounds that may affect parasite motility. Studies show 69-75% reduction in some parasites, though pinworm-specific research is limited.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">• Garlic: Fresh garlic in cooking</p>
                      <p className="text-green-600 text-xs ml-2">Allicin compounds disrupt parasite cell membranes. Most effective when crushed fresh. Proven against protozoa like Giardia and Entamoeba.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">• Probiotic foods: Yogurt, kefir, fermented vegetables</p>
                      <p className="text-green-600 text-xs ml-2">Strengthen gut barrier and immune response. Beneficial bacteria produce antimicrobial compounds and compete with parasites for resources.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">• High-fiber foods: Support regular bowel movements</p>
                      <p className="text-green-600 text-xs ml-2">Support beneficial bacteria growth, enhance mucus production, and improve intestinal transit to help eliminate parasites naturally.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
                  <h4 className="font-semibold text-red-800 mb-3">Foods to Limit:</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-red-700">• Excess sugar and refined carbohydrates</p>
                      <p className="text-red-600 text-xs ml-2">Disrupt gut microbiome balance and may suppress immune function, potentially hindering recovery.</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">• Processed foods during treatment</p>
                      <p className="text-red-600 text-xs ml-2">Often lack essential nutrients and contain additives that may disrupt beneficial gut bacteria.</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">• Foods that trigger digestive symptoms</p>
                      <p className="text-red-600 text-xs ml-2">Individual sensitivities may worsen discomfort during treatment. Focus on easily digestible, nutrient-dense foods.</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">• Undercooked meat and fish</p>
                      <p className="text-red-600 text-xs ml-2">Risk of additional parasitic infections while immune system is managing current condition.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 border-l-4 border-l-blue-500 mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Scientific Note:</strong> While traditional use supports these approaches, peer-reviewed research specifically on pinworms is limited. These foods may provide general immune and digestive support during treatment.
                </AlertDescription>
              </Alert>
            </div>

            {/* Herbal and Traditional Approaches */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-yellow-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-yellow-600" />
                Herbal Considerations
              </h3>
              
              <Alert className="border-orange-200 bg-orange-50 border-l-4 border-l-orange-500 mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Note:</strong> Scientific evidence for herbal treatments is limited. These should only be used as complementary support alongside proven medical treatment.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Traditional Herbs:</h4>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• <strong>Wormwood:</strong> Traditional use, requires professional guidance</li>
                    <li>• <strong>Black walnut:</strong> Traditional antiparasitic, limited modern evidence</li>
                    <li>• <strong>Cloves:</strong> Traditional use, may support digestive health</li>
                    <li>• <strong>Oregano oil:</strong> General antimicrobial properties</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 border-l-4 border-l-pink-500">
                  <h4 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Important Notes
                  </h4>
                  <ul className="space-y-2 text-sm text-pink-700">
                    <li>• Consult healthcare provider before use</li>
                    <li>• May interact with medications</li>
                    <li>• Not recommended as sole treatment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lifestyle Support */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-purple-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Lifestyle and Wellness Support
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 border-l-4 border-l-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-3">Stress Management</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Regular sleep schedule</li>
                    <li>• Stress reduction techniques</li>
                    <li>• Moderate exercise</li>
                    <li>• Mindfulness practices</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-800 mb-3">Digestive Health</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Stay well-hydrated</li>
                    <li>• Regular meal timing</li>
                    <li>• Gentle movement after meals</li>
                    <li>• Avoid digestive irritants</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 border-l-4 border-l-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-3">Immune Support</h4>
                  <ul className="space-y-1 text-sm text-purple-700">
                    <li>• Adequate sleep (7-9 hours)</li>
                    <li>• Regular physical activity</li>
                    <li>• Balanced nutrition</li>
                    <li>• Limit alcohol and smoking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Complementary Therapies */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-teal-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-600" />
                Complementary Therapies
              </h3>
              
              <div className="space-y-3 text-sm text-gray-700">
                <p>• <strong>Probiotics:</strong> May support gut health during and after treatment</p>
                <p>• <strong>Digestive enzymes:</strong> For those with digestive sensitivities</p>
                <p>• <strong>Immune support:</strong> Vitamin C, zinc (within recommended daily amounts)</p>
                <p>• <strong>Anti-inflammatory foods:</strong> Support overall digestive health</p>
              </div>
            </div>
          </div>
        )

      case 'guidelines':
        return (
          <div className="space-y-6">
            {/* DO/DON'T Guidelines */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  DO: Essential Actions
                </h3>
                <ul className="space-y-3 text-sm text-green-700">
                  <li>• Take medication exactly as prescribed</li>
                  <li>• Wash hands frequently with soap and water</li>
                  <li>• Shower in the morning to remove overnight eggs</li>
                  <li>• Keep fingernails trimmed short and clean</li>
                  <li>• Wash bedding and clothing in hot water (60°C/140°F)</li>
                  <li>• Vacuum carpets and furniture regularly</li>
                  <li>• Disinfect bathroom surfaces daily</li>
                  <li>• Consider treating all household members</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  DON'T: Avoid These Actions
                </h3>
                <ul className="space-y-3 text-sm text-red-700">
                  <li>• Don't scratch the anal area</li>
                  <li>• Don't bite fingernails or put fingers in mouth</li>
                  <li>• Don't share towels, washcloths, or underwear</li>
                  <li>• Don't shake out bedding or clothing</li>
                  <li>• Don't eat in the bedroom</li>
                  <li>• Don't skip doses of prescribed medication</li>
                  <li>• Don't assume the infection is gone without completing treatment</li>
                  <li>• Don't panic - this is a common, treatable condition</li>
                </ul>
              </div>
            </div>

            {/* Medical Attention Warnings */}
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 border-l-4 border-l-yellow-500">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Seek Medical Attention If:
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Symptoms persist after completing treatment</li>
                  <li>• Severe abdominal pain develops</li>
                  <li>• Signs of secondary bacterial infection appear</li>
                  <li>• Multiple family members are repeatedly infected</li>
                </ul>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 border-l-4 border-l-pink-500">
                <h4 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Immediate Medical Care If:
                </h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• High fever (over 38.5°C/101.3°F)</li>
                  <li>• Severe allergic reaction to medication</li>
                  <li>• Persistent vomiting preventing medication retention</li>
                  <li>• Signs of dehydration or severe illness</li>
                </ul>
              </div>
            </div>

            {/* Timeline Progression */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 border-l-4 border-l-blue-500">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Treatment Timeline & Expectations
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    week: "Week 1",
                    title: "Initial Treatment",
                    color: "blue",
                    items: [
                      "Take first dose of medication",
                      "Begin strict hygiene protocol",
                      "Start environmental cleaning",
                      "May still see worms (normal)"
                    ]
                  },
                  {
                    week: "Week 2",
                    title: "Second Dose",
                    color: "green",
                    items: [
                      "Take second medication dose",
                      "Continue hygiene measures",
                      "Symptoms should be decreasing",
                      "Maintain cleaning routine"
                    ]
                  },
                  {
                    week: "Week 3",
                    title: "Monitoring",
                    color: "yellow",
                    items: [
                      "Monitor for symptom resolution",
                      "Continue preventive hygiene",
                      "Watch for reinfection signs",
                      "Maintain household protocols"
                    ]
                  },
                  {
                    week: "Week 4",
                    title: "Recovery",
                    color: "purple",
                    items: [
                      "Symptoms should be resolved",
                      "Continue good hygiene habits",
                      "Consider follow-up if needed",
                      "Return to normal activities"
                    ]
                  }
                ].map((phase, index) => (
                  <Card key={index} className={`border-l-4 border-l-${phase.color}-500`}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-base text-${phase.color}-800`}>{phase.week}</CardTitle>
                      <CardDescription className={`text-${phase.color}-600 font-medium`}>{phase.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-gray-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success Indicators */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 border-l-4 border-l-blue-500">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Signs of Successful Treatment
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• No visible worms in stool or around anus</li>
                  <li>• Reduced or eliminated itching</li>
                  <li>• Improved sleep quality</li>
                  <li>• Return to normal bowel habits</li>
                </ul>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• No new symptoms in family members</li>
                  <li>• Completion of full medication course</li>
                  <li>• Successful hygiene routine maintenance</li>
                  <li>• Overall improvement in well-being</li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Select a section to view content</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 py-4 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Info },
              { id: 'management', label: 'Management', icon: Target },
              { id: 'family', label: 'Family Life', icon: Users },
              { id: 'intimacy', label: 'Intimacy', icon: Heart },
              { id: 'activities', label: 'Activities', icon: Activity },
              { id: 'natural', label: 'Natural Approaches', icon: Leaf },
              { id: 'guidelines', label: 'Guidelines', icon: Shield }
            ].map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 whitespace-nowrap transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <section.icon className="h-4 w-4" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">
              This guide provides general information and should not replace professional medical advice.
            </p>
            <p>
              Always consult with healthcare providers for diagnosis and treatment decisions.
            </p>
          </div>
        </div>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  )
}

export default App

