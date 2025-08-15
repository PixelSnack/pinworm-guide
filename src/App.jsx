// Complete Pinworm Guide - Enhanced with Scientific Dietary Section
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
                      <p>• Allow self-management of hygiene with periodic check-ins</p>
                      <p>• Discuss importance of not sharing personal items</p>
                      <p>• Address any embarrassment or social concerns openly</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Social Life Management
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Normal social activities can continue with proper hygiene</p>
                      <p>• Avoid sleepovers during active treatment period</p>
                      <p>• Pack personal hygiene supplies for activities away from home</p>
                      <p>• Maintain regular shower schedule, especially after sports</p>
                      <p>• Be discreet about condition while maintaining good practices</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Academic Considerations
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Condition should not affect academic performance</p>
                      <p>• If sleep is disrupted, consider temporary schedule adjustments</p>
                      <p>• Maintain focus on long-term health and hygiene habits</p>
                      <p>• Use this as learning opportunity about health management</p>
                      <p>• Encourage questions and provide reliable health resources</p>
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
                      Family Treatment Protocols
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Consider treating all household members simultaneously</p>
                      <p>• Coordinate medication schedules for the entire family</p>
                      <p>• Implement household-wide hygiene improvements</p>
                      <p>• Monitor all family members for symptoms</p>
                      <p>• Schedule follow-up care for the entire household if needed</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Cleaning & Disinfection
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Wash all bedding and clothing in hot water (60°C/140°F)</p>
                      <p>• Vacuum carpets and upholstered furniture thoroughly</p>
                      <p>• Disinfect bathroom surfaces, doorknobs, and light switches</p>
                      <p>• Clean and disinfect toys, especially those that go in mouths</p>
                      <p>• Maintain increased cleaning frequency for 2-3 weeks</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-green-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Long-term Prevention
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 pl-6 space-y-2 text-sm text-gray-700">
                      <p>• Establish family handwashing routines before meals</p>
                      <p>• Keep fingernails short and clean for all family members</p>
                      <p>• Separate personal items like towels and washcloths</p>
                      <p>• Maintain regular cleaning schedules for common areas</p>
                      <p>• Educate family about reinfection prevention strategies</p>
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
                  Professional guidance for maintaining intimate relationships during pinworm treatment. This information is based on medical recommendations and research.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Safe Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium text-green-800">Recommended Approaches:</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Shower before intimate contact</li>
                        <li>• Focus on non-genital intimacy during treatment</li>
                        <li>• Maintain emotional connection and communication</li>
                        <li>• Practice excellent hand hygiene before and after contact</li>
                        <li>• Consider barrier methods if engaging in intimate contact</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-green-800">Communication Guidelines:</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Discuss treatment openly with your partner</li>
                        <li>• Plan alternative forms of intimacy</li>
                        <li>• Set realistic expectations for the treatment period</li>
                        <li>• Support each other through the process</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Higher Risk Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-800">Activities to Avoid:</h4>
                      <ul className="space-y-1 text-red-700">
                        <li>• Oral-anal contact</li>
                        <li>• Contact with anal area during active infection</li>
                        <li>• Sharing unwashed intimate items</li>
                        <li>• Intimate contact without prior hygiene</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-800">Transmission Risks:</h4>
                      <ul className="space-y-1 text-red-700">
                        <li>• Hand-to-mouth contact after intimate touching</li>
                        <li>• Sharing bedding without proper washing</li>
                        <li>• Close contact without shower/hygiene</li>
                        <li>• Contaminated surfaces in shared spaces</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                  <ChevronDown className="h-4 w-4" />
                  Detailed Practical Guidelines
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-base text-blue-800">Treatment Period Recommendations (2-3 weeks)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Week 1 (Active Treatment):</h4>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• Focus on non-genital physical intimacy</li>
                          <li>• Prioritize emotional connection and communication</li>
                          <li>• Maintain separate sleeping arrangements if possible</li>
                          <li>• Shower before any intimate contact</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Week 2-3 (Monitoring Period):</h4>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• Gradually resume normal intimacy with continued precautions</li>
                          <li>• Maintain excellent hygiene practices</li>
                          <li>• Monitor for any symptom recurrence</li>
                          <li>• Continue open communication about comfort levels</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Post-Treatment:</h4>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>• Resume normal intimate relationship</li>
                          <li>• Maintain improved hygiene habits as prevention</li>
                          <li>• Discuss experience and lessons learned</li>
                          <li>• Consider couples counseling if relationship was significantly impacted</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert className="border-blue-200 bg-blue-50 border-l-4 border-l-blue-500">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Professional Note:</strong> These guidelines are based on medical recommendations for preventing transmission while maintaining relationship health. Individual circumstances may vary. Consult healthcare providers for personalized advice, especially if you have concerns about transmission or relationship impact.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Collapsible>
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
                      Workplace Considerations
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Continue normal work schedule - no need for time off</p>
                      <p>• Maintain excellent hand hygiene, especially before meals</p>
                      <p>• Avoid sharing food or eating utensils with colleagues</p>
                      <p>• Keep personal items (water bottles, pens) separate</p>
                      <p>• Use hand sanitizer frequently, especially after bathroom use</p>
                      <p>• Consider packing individual lunches rather than shared meals</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Social Gatherings
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Most social activities can continue with precautions</p>
                      <p>• Avoid potluck meals or shared food preparation</p>
                      <p>• Bring your own snacks and drinks to gatherings</p>
                      <p>• Be mindful of handshaking and close contact</p>
                      <p>• Wash hands frequently, especially before eating</p>
                      <p>• Consider postponing overnight visits during active treatment</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Childcare & Schools
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Children can attend school and daycare during treatment</p>
                      <p>• Inform caregivers about increased hygiene needs</p>
                      <p>• Pack individual snacks and discourage food sharing</p>
                      <p>• Ensure frequent handwashing, especially before meals</p>
                      <p>• Send extra underwear and hygiene supplies</p>
                      <p>• Monitor for symptoms that might disrupt learning</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    Sports & Physical Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Exercise & Fitness
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Continue regular exercise routine - it supports immune function</p>
                      <p>• Shower immediately after workouts</p>
                      <p>• Bring your own towels and water bottles</p>
                      <p>• Avoid sharing equipment when possible</p>
                      <p>• Wipe down equipment before and after use</p>
                      <p>• Change into clean clothes after exercising</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Swimming & Water Activities
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Swimming is generally safe in properly chlorinated pools</p>
                      <p>• Shower before entering pool areas</p>
                      <p>• Avoid swallowing pool water</p>
                      <p>• Use your own towels and don't share</p>
                      <p>• Change out of wet swimwear promptly</p>
                      <p>• Consider avoiding crowded public pools during active treatment</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-purple-600 transition-colors duration-200">
                      <ChevronRight className="h-4 w-4" />
                      Team Sports & Group Activities
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                      <p>• Participation is generally safe with good hygiene</p>
                      <p>• Avoid sharing water bottles or snacks</p>
                      <p>• Wash hands before and after activities</p>
                      <p>• Bring individual equipment when possible</p>
                      <p>• Shower or clean up immediately after activities</p>
                      <p>• Be extra cautious with activities involving close contact</p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-orange-600" />
                  Travel Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-orange-600 transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                    Short-term Travel (1-3 days)
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                    <p>• Pack extra hygiene supplies and hand sanitizer</p>
                    <p>• Bring your own towels and personal items</p>
                    <p>• Maintain medication schedule while away</p>
                    <p>• Choose accommodations with private bathrooms if possible</p>
                    <p>• Pack extra underwear and clothing</p>
                    <p>• Avoid sharing beds or bedding with others</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-orange-600 transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                    Extended Travel (1+ weeks)
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                    <p>• Consider postponing non-essential travel during active treatment</p>
                    <p>• Ensure access to medical care at destination</p>
                    <p>• Pack sufficient medication for entire trip plus extra</p>
                    <p>• Research local hygiene facilities and accommodations</p>
                    <p>• Maintain strict hygiene routines despite schedule changes</p>
                    <p>• Consider travel insurance that covers medical needs</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 font-medium hover:text-orange-600 transition-colors duration-200">
                    <ChevronRight className="h-4 w-4" />
                    International Travel
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 text-sm text-gray-700">
                    <p>• Research medication availability at destination</p>
                    <p>• Carry prescription documentation for medications</p>
                    <p>• Pack comprehensive first aid and hygiene kit</p>
                    <p>• Understand local healthcare system access</p>
                    <p>• Maintain extra vigilance with food and water safety</p>
                    <p>• Consider consulting travel medicine specialist</p>
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

            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                Dietary Approaches
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-800 mb-3">Potentially Helpful Foods:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-b border-green-200 pb-2">
                      <div className="font-medium text-green-800 mb-1">🎃 Pumpkin Seeds (1-2 handfuls daily)</div>
                      <p className="text-green-700 text-xs leading-relaxed">
                        <strong>Active compound:</strong> Cucurbitacin - may affect parasite motility and development. 
                        <strong>Evidence:</strong> Limited scientific support; traditional use in many cultures. 
                        Recent studies show 69-75% reduction in some parasites, but specific pinworm research is limited.
                      </p>
                    </div>
                    
                    <div className="border-b border-green-200 pb-2">
                      <div className="font-medium text-green-800 mb-1">🧄 Fresh Garlic (in cooking)</div>
                      <p className="text-green-700 text-xs leading-relaxed">
                        <strong>Active compound:</strong> Allicin - disrupts parasite cell membranes and metabolism. 
                        <strong>Evidence:</strong> Proven antiparasitic against protozoa (Giardia, Entamoeba); limited pinworm-specific research. 
                        Most effective when crushed fresh (releases allicin).
                      </p>
                    </div>
                    
                    <div className="border-b border-green-200 pb-2">
                      <div className="font-medium text-green-800 mb-1">🦠 Probiotic Foods (yogurt, kefir, fermented vegetables)</div>
                      <p className="text-green-700 text-xs leading-relaxed">
                        <strong>Mechanism:</strong> Enhance gut barrier function and immune response. 
                        <strong>Evidence:</strong> Strong research showing probiotics improve resistance to intestinal parasites by strengthening gut microbiome and producing antimicrobial compounds.
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-medium text-green-800 mb-1">🌾 High-Fiber Foods (support digestive health)</div>
                      <p className="text-green-700 text-xs leading-relaxed">
                        <strong>Mechanism:</strong> Promote regular bowel movements, support beneficial gut bacteria, enhance mucus production. 
                        <strong>Evidence:</strong> Well-established benefits for gut health; may help eliminate parasites through improved intestinal transit.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
                  <h4 className="font-semibold text-red-800 mb-3">Foods to Limit:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-b border-red-200 pb-2">
                      <div className="font-medium text-red-800 mb-1">🍭 Excess Sugar & Refined Carbohydrates</div>
                      <p className="text-red-700 text-xs leading-relaxed">
                        <strong>Rationale:</strong> High sugar intake may disrupt gut microbiome balance, potentially reducing resistance to parasites. 
                        <strong>Evidence:</strong> Studies show refined sugars can suppress immune function and alter beneficial gut bacteria.
                      </p>
                    </div>
                    
                    <div className="border-b border-red-200 pb-2">
                      <div className="font-medium text-red-800 mb-1">🥫 Processed Foods During Treatment</div>
                      <p className="text-red-700 text-xs leading-relaxed">
                        <strong>Rationale:</strong> Often contain additives that may disrupt gut microbiome; lack nutrients needed for immune function. 
                        <strong>Focus instead:</strong> Whole foods that support digestive health and immune response.
                      </p>
                    </div>
                    
                    <div className="border-b border-red-200 pb-2">
                      <div className="font-medium text-red-800 mb-1">🌶️ Foods That Trigger Digestive Symptoms</div>
                      <p className="text-red-700 text-xs leading-relaxed">
                        <strong>Rationale:</strong> Individual tolerance varies; avoid foods that cause inflammation or digestive upset during treatment. 
                        <strong>Common triggers:</strong> Spicy foods, high-fat foods, or personal food sensitivities.
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-medium text-red-800 mb-1">🐟 Undercooked Meat & Fish</div>
                      <p className="text-red-700 text-xs leading-relaxed">
                        <strong>Rationale:</strong> Risk of additional parasitic infections during treatment period. 
                        <strong>Precaution:</strong> Ensure proper cooking temperatures to avoid compounding parasitic burden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Alert className="border-blue-200 bg-blue-50 mt-4 border-l-4 border-l-blue-500">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Scientific Note:</strong> While these dietary approaches have traditional use and some research support, 
                  they should complement, not replace, proven antiparasitic medications. Individual responses may vary, and 
                  more research is needed specifically for pinworm infections.
                </AlertDescription>
              </Alert>
            </div>

            {/* Herbal and Traditional Approaches */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-yellow-600" />
                  Herbal and Traditional Approaches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Note:</strong> Scientific evidence for herbal treatments is limited. These should only be used as complementary support alongside proven medical treatment.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-yellow-800">• Wormwood:</span> Traditional use, requires professional guidance
                  </div>
                  <div>
                    <span className="font-medium text-yellow-800">• Black walnut:</span> Traditional antiparasitic, limited modern evidence
                  </div>
                  <div>
                    <span className="font-medium text-yellow-800">• Cloves:</span> Traditional use, may support digestive health
                  </div>
                  <div>
                    <span className="font-medium text-yellow-800">• Papaya seeds:</span> Traditional use in some cultures
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Support */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Lifestyle Support
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Stress Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Regular sleep schedule</p>
                    <p>• Stress reduction techniques</p>
                    <p>• Moderate exercise</p>
                    <p>• Mindfulness practices</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Digestive Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Stay well-hydrated</p>
                    <p>• Regular meal timing</p>
                    <p>• Gentle movement after meals</p>
                    <p>• Avoid digestive irritants</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Immune Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Adequate sleep (7-9 hours)</p>
                    <p>• Regular physical activity</p>
                    <p>• Balanced nutrition</p>
                    <p>• Limit alcohol and smoking</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Complementary Therapies */}
            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-indigo-600" />
                  Complementary Therapies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">• Probiotics:</span> May support gut health during and after treatment
                </div>
                <div>
                  <span className="font-medium">• Digestive enzymes:</span> For those with digestive sensitivities
                </div>
                <div>
                  <span className="font-medium">• Immune support:</span> Vitamin C, zinc (within recommended daily amounts)
                </div>
                <div>
                  <span className="font-medium">• Anti-inflammatory foods:</span> Support overall digestive health
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'guidelines':
        return (
          <div className="space-y-6">
            {/* DO/DON'T Side-by-side layout */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    DO - Essential Practices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-800">Hygiene Essentials:</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• Wash hands thoroughly with soap for 20+ seconds</li>
                      <li>• Shower in the morning to remove overnight eggs</li>
                      <li>• Keep fingernails very short and clean</li>
                      <li>• Change underwear and pajamas daily</li>
                      <li>• Wash bedding in hot water (60°C/140°F) every 2-3 days</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-800">Treatment Compliance:</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• Take medication exactly as prescribed</li>
                      <li>• Complete the full treatment course</li>
                      <li>• Follow up with healthcare provider if symptoms persist</li>
                      <li>• Consider treating all household members</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-800">Environmental Control:</h4>
                    <ul className="space-y-1 text-green-700">
                      <li>• Vacuum carpets and furniture regularly</li>
                      <li>• Disinfect bathroom surfaces daily</li>
                      <li>• Clean doorknobs, light switches, and frequently touched surfaces</li>
                      <li>• Wash toys and personal items regularly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    DON'T - Avoid These Practices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-800">Hygiene Mistakes:</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Don't scratch the anal area (increases spread)</li>
                      <li>• Don't bite fingernails or put fingers in mouth</li>
                      <li>• Don't share towels, washcloths, or personal items</li>
                      <li>• Don't shake out bedding or clothing (spreads eggs)</li>
                      <li>• Don't rely on hand sanitizer alone</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-800">Treatment Errors:</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Don't skip doses or stop treatment early</li>
                      <li>• Don't assume one dose is sufficient</li>
                      <li>• Don't ignore persistent symptoms</li>
                      <li>• Don't treat only the infected person (family spread is common)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-800">Environmental Mistakes:</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Don't use cold water for washing contaminated items</li>
                      <li>• Don't forget to clean under fingernails</li>
                      <li>• Don't ignore frequently touched surfaces</li>
                      <li>• Don't assume the problem will resolve without treatment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Warning boxes for medical attention */}
            <div className="grid md:grid-cols-2 gap-4">
              <Alert className="border-yellow-200 bg-yellow-50 border-l-4 border-l-yellow-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Seek Medical Attention If:</strong>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Symptoms persist after completing treatment</li>
                    <li>• Severe abdominal pain develops</li>
                    <li>• Signs of secondary bacterial infection appear</li>
                    <li>• Multiple family members are repeatedly infected</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <Alert className="border-pink-200 bg-pink-50 border-l-4 border-l-pink-500">
                <AlertDescription>
                  <strong>Emergency Care If:</strong>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Severe allergic reaction to medication</li>
                    <li>• Intense abdominal pain with vomiting</li>
                    <li>• Signs of intestinal obstruction</li>
                    <li>• High fever with severe symptoms</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>

            {/* Timeline progression cards */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Treatment Timeline & Expectations
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    week: "Week 1",
                    title: "Active Treatment",
                    color: "blue",
                    items: [
                      "Take first dose of medication",
                      "Begin intensive hygiene protocol",
                      "Start environmental cleaning",
                      "May still see live worms (normal)"
                    ]
                  },
                  {
                    week: "Week 2", 
                    title: "Second Dose",
                    color: "purple",
                    items: [
                      "Take second dose as prescribed",
                      "Continue strict hygiene practices",
                      "Symptoms should be decreasing",
                      "Maintain environmental controls"
                    ]
                  },
                  {
                    week: "Week 3",
                    title: "Monitoring",
                    color: "green", 
                    items: [
                      "Symptoms should be resolved",
                      "Continue good hygiene habits",
                      "Monitor for any recurrence",
                      "Gradually reduce intensive cleaning"
                    ]
                  },
                  {
                    week: "Week 4+",
                    title: "Prevention",
                    color: "teal",
                    items: [
                      "Maintain improved hygiene habits",
                      "Return to normal activities",
                      "Watch for reinfection signs",
                      "Consider follow-up if needed"
                    ]
                  }
                ].map((phase, index) => (
                  <Card key={index} className={`border-l-4 border-l-${phase.color}-500`}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-${phase.color}-800 text-base`}>
                        {phase.week}
                      </CardTitle>
                      <CardDescription className={`text-${phase.color}-600 font-medium`}>
                        {phase.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-xs">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-1">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success indicators */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Signs of Successful Treatment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Physical Improvements:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Reduced or eliminated anal itching</li>
                      <li>• Improved sleep quality</li>
                      <li>• No visible worms in stool</li>
                      <li>• Decreased restlessness at night</li>
                      <li>• Return of normal appetite</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Behavioral Improvements:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Less irritability and mood swings</li>
                      <li>• Improved concentration</li>
                      <li>• Reduced scratching behaviors</li>
                      <li>• Better overall energy levels</li>
                      <li>• Return to normal daily activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Complete Pinworm Management Guide
          </h1>
          <p className="text-gray-600 text-center mt-2">
            A practical, evidence-based guide for families, couples, and individuals worldwide. Living normally during treatment.
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 py-3">
            {[
              { id: 'overview', label: 'Overview', icon: Info },
              { id: 'management', label: 'Management', icon: Target },
              { id: 'family', label: 'Family Life', icon: Users },
              { id: 'intimacy', label: 'Intimacy', icon: Heart },
              { id: 'activities', label: 'Activities', icon: Activity },
              { id: 'natural', label: 'Natural Approaches', icon: Leaf },
              { id: 'guidelines', label: 'Guidelines', icon: CheckCircle }
            ].map((section) => {
              const Icon = section.icon
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 transition-colors duration-200 ${
                    activeSection === section.id 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </Button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              This guide provides general information and should not replace professional medical advice.
            </p>
            <p>
              Always consult with healthcare providers for diagnosis, treatment, and personalized medical guidance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

