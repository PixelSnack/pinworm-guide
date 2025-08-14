// Updated for Vite deployment - Complete Pinworm Guide
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
  Pill
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
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <AlertTriangle className="h-5 w-5" />
              Adults Only Content
            </CardTitle>
            <CardDescription className="text-orange-700">
              This section contains intimate relationship guidance for adults.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setShowAdultContent(true)}
              variant="outline"
              className="border-orange-300 text-orange-800 hover:bg-orange-100"
            >
              I am 18+ and want to view this content
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children
  }

  const SectionCard = ({ title, icon: Icon, children, isAdultContent = false }) => {
    const content = (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-blue-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    )
    
    if (isAdultContent) {
      return <AdultContentWarning>{content}</AdultContentWarning>
    }
    return content
  }

  const CollapsibleSection = ({ title, children, id }) => {
    return (
      <Collapsible open={openSections[id]} onOpenChange={() => toggleSection(id)}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-4 h-auto">
            <span className="text-left">{title}</span>
            {openSections[id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4">
          {children}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Complete Pinworm Management Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A practical, evidence-based guide for families, couples, and individuals worldwide.
              Living normally during treatment.
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: Info },
              { id: 'management', label: 'Management', icon: Shield },
              { id: 'family', label: 'Family Life', icon: Users },
              { id: 'intimacy', label: 'Intimacy', icon: Heart },
              { id: 'activities', label: 'Activities', icon: Activity },
              { id: 'natural', label: 'Natural Approaches', icon: Leaf },
              { id: 'guidelines', label: 'Guidelines', icon: CheckCircle }
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeSection === id ? "default" : "ghost"}
                onClick={() => setActiveSection(id)}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Pinworms affect millions of people worldwide annually. This is a common, highly treatable condition
                that occurs across all socioeconomic levels and geographic regions.
              </AlertDescription>
            </Alert>

            <SectionCard title="Understanding Pinworms" icon={Info}>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Pinworms are tiny white parasitic worms (about the size of a staple) that live in your intestine.
                  Female worms crawl out at night to the microscopic, sticky area around the anal area. These eggs
                  become infectious within 6 hours and can survive on surfaces for 2-3 weeks.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">The Transmission Cycle:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>You accidentally swallow pinworm eggs (through hand-to-mouth contact)</li>
                    <li>Eggs hatch in your small intestine</li>
                    <li>Worms mature in your large intestine over 2-6 weeks</li>
                    <li>Females lay new eggs around your anus</li>
                    <li>Cycle repeats</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">What Kills Pinworm Eggs:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Hot water (60°C/140°F or higher)</li>
                      <li>• Regular soap and water</li>
                      <li>• Household disinfectants with alcohol or bleach</li>
                      <li>• High heat from dryers (40+ minutes)</li>
                      <li>• Direct sunlight (UV exposure)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">What Doesn't Kill Eggs:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Hand sanitizer alone</li>
                      <li>• Cold or lukewarm water</li>
                      <li>• Air fresheners</li>
                      <li>• Surface sprays without disinfectant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'management' && (
          <div className="space-y-6">
            <SectionCard title="5-Phase Management Approach" icon={Shield}>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Immediate Response (First 12 Hours)",
                    goal: "Assume eggs are already in your environment and act accordingly",
                    actions: [
                      "Everyone in household follows same hygiene measures",
                      "Don't share towels, washcloths, or bedding",
                      "Begin surface cleaning with soap and hot water",
                      "Contact pharmacy/healthcare provider for medication"
                    ]
                  },
                  {
                    phase: "Phase 2: Environmental Control (Within 12 Hours)",
                    goal: "Kill any eggs already in your space",
                    actions: [
                      "Wash all underwear, towels, washcloths, pajamas daily at 60°C (140°F)",
                      "Dry on high heat for 40+ minutes",
                      "Clean toilet seats, handles, switches, doorknobs daily",
                      "Vacuum carpets and mop floors regularly",
                      "Individual towels for each person"
                    ]
                  },
                  {
                    phase: "Phase 3: Personal Protocol (Ongoing)",
                    goal: "Stop re-infecting yourself",
                    actions: [
                      "Morning showers daily - removes eggs laid overnight",
                      "Change underwear twice daily (morning and bedtime)",
                      "Sleep in snug-fitting underwear",
                      "Keep hands away from mouth",
                      "Wipe front-to-back",
                      "Wash hands with soap for 20 seconds frequently"
                    ]
                  },
                  {
                    phase: "Phase 4: Dietary Support",
                    goal: "Support overall digestive health",
                    actions: [
                      "For IBS/Crohn's: Focus on easily digestible foods",
                      "Include lean proteins and cooked vegetables",
                      "Consider probiotic foods if tolerated",
                      "Limit excess sugar and refined carbohydrates",
                      "Stay well-hydrated"
                    ]
                  }
                ].map((phase, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <CardDescription className="font-medium text-blue-700">
                        Goal: {phase.goal}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                {/* Enhanced Phase 5 with Comprehensive Medication Information */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Pill className="h-5 w-5" />
                      Phase 5: Medical Treatment
                    </CardTitle>
                    <CardDescription className="font-medium text-blue-700">
                      Goal: Eliminate worms with proven medication
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Request mebendazole, albendazole, or pyrantel pamoate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Entire household takes medication simultaneously</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Standard: single dose + repeat exactly 14 days later</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Complete both doses even if symptoms improve</span>
                        </li>
                      </ul>

                      {/* Comprehensive Medication Information */}
                      <CollapsibleSection title="📋 Detailed Medication Comparison" id="medication-comparison">
                        <div className="space-y-6">
                          <Alert className="border-blue-200 bg-blue-50">
                            <Pill className="h-4 w-4" />
                            <AlertDescription>
                              All three medications are highly effective against pinworms. Choice often depends on availability, age, and regional preferences.
                            </AlertDescription>
                          </Alert>

                          <div className="grid md:grid-cols-3 gap-4">
                            {/* Mebendazole */}
                            <Card className="border-2 border-blue-200">
                              <CardHeader>
                                <CardTitle className="text-lg text-blue-700">Mebendazole</CardTitle>
                                <Badge variant="secondary">First-line treatment</Badge>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <h5 className="font-semibold text-sm">How it works:</h5>
                                  <p className="text-xs text-gray-600">Prevents worms from absorbing glucose, causing them to die within 2-3 days</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Duration in body:</h5>
                                  <p className="text-xs text-gray-600">Active for 2-3 days, minimal absorption into bloodstream</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Dosage:</h5>
                                  <p className="text-xs text-gray-600">Single 100mg dose, repeat after 14 days</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Availability:</h5>
                                  <p className="text-xs text-gray-600">Prescription required in most countries</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Food requirements:</h5>
                                  <p className="text-xs text-gray-600">Can be taken with or without food</p>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Albendazole */}
                            <Card className="border-2 border-green-200">
                              <CardHeader>
                                <CardTitle className="text-lg text-green-700">Albendazole</CardTitle>
                                <Badge variant="secondary">Alternative option</Badge>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <h5 className="font-semibold text-sm">How it works:</h5>
                                  <p className="text-xs text-gray-600">Disrupts worm cell structure and energy production</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Duration in body:</h5>
                                  <p className="text-xs text-gray-600">Active for 8-12 hours, better tissue penetration</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Dosage:</h5>
                                  <p className="text-xs text-gray-600">Single 400mg dose, repeat after 14 days</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Availability:</h5>
                                  <p className="text-xs text-gray-600">Prescription required, widely available globally</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Food requirements:</h5>
                                  <p className="text-xs text-gray-600">Take with fatty food for better absorption</p>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Pyrantel Pamoate */}
                            <Card className="border-2 border-orange-200">
                              <CardHeader>
                                <CardTitle className="text-lg text-orange-700">Pyrantel Pamoate</CardTitle>
                                <Badge variant="secondary">Over-the-counter</Badge>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <h5 className="font-semibold text-sm">How it works:</h5>
                                  <p className="text-xs text-gray-600">Paralyzes worms by blocking nerve transmission</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Duration in body:</h5>
                                  <p className="text-xs text-gray-600">Active for 24-48 hours, minimal absorption</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Dosage:</h5>
                                  <p className="text-xs text-gray-600">11mg/kg body weight, repeat after 14 days</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Availability:</h5>
                                  <p className="text-xs text-gray-600">Over-the-counter in many countries (Pin-X, Reese's)</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm">Food requirements:</h5>
                                  <p className="text-xs text-gray-600">Can be taken with or without food</p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* International Treatment Variations */}
                          <Card className="bg-yellow-50 border-yellow-200">
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                🌍 International Treatment Protocols
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">🇩🇰 Denmark - 3-Phase Protocol:</h5>
                                  <ul className="text-xs space-y-1">
                                    <li>• <strong>Day 0:</strong> First mebendazole dose</li>
                                    <li>• <strong>Day 14:</strong> Second dose (standard)</li>
                                    <li>• <strong>Day 28:</strong> Third dose (additional 2 weeks later)</li>
                                    <li>• <strong>Rationale:</strong> Addresses potential reinfection cycles</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">🌍 Other Regional Variations:</h5>
                                  <ul className="text-xs space-y-1">
                                    <li>• <strong>UK/Australia:</strong> Single dose mebendazole often sufficient</li>
                                    <li>• <strong>USA:</strong> Pyrantel pamoate commonly used (OTC)</li>
                                    <li>• <strong>WHO Guidelines:</strong> Albendazole for mass treatment programs</li>
                                    <li>• <strong>Canada:</strong> Mebendazole preferred, 2-dose standard</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <Alert className="border-orange-200 bg-orange-50">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription className="text-sm">
                                  <strong>Important:</strong> Always follow your healthcare provider's specific instructions and local treatment guidelines, which may differ from standard protocols based on regional experience and resistance patterns.
                                </AlertDescription>
                              </Alert>
                            </CardContent>
                          </Card>

                          {/* Side Effects and Considerations */}
                          <Card className="bg-gray-50 border-gray-200">
                            <CardHeader>
                              <CardTitle className="text-lg">⚠️ Side Effects & Considerations</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">Common Side Effects (All medications):</h5>
                                  <ul className="text-xs space-y-1">
                                    <li>• Mild nausea or stomach upset</li>
                                    <li>• Diarrhea or loose stools</li>
                                    <li>• Headache (rare)</li>
                                    <li>• Dizziness (rare)</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm mb-2">When to Contact Healthcare Provider:</h5>
                                  <ul className="text-xs space-y-1">
                                    <li>• Severe abdominal pain</li>
                                    <li>• Persistent vomiting</li>
                                    <li>• Signs of allergic reaction</li>
                                    <li>• Symptoms persist after treatment</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CollapsibleSection>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'family' && (
          <div className="space-y-6">
            <SectionCard title="Family Life During Treatment" icon={Users}>
              <div className="space-y-4">
                <Alert className="border-blue-200 bg-blue-50">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Family life can continue normally with proper precautions. Focus on routine hygiene rather than isolation.
                  </AlertDescription>
                </Alert>

                <CollapsibleSection title="Household Management" id="household">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Shared Spaces</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Clean bathroom surfaces daily with disinfectant</li>
                      <li>• Individual towels and washcloths for each family member</li>
                      <li>• Wash bedding weekly in hot water</li>
                      <li>• Vacuum carpets and upholstery regularly</li>
                    </ul>

                    <h4 className="font-semibold">Kitchen Safety</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands before food preparation</li>
                      <li>• Clean surfaces with soap and water</li>
                      <li>• Individual plates and utensils (normal washing is sufficient)</li>
                      <li>• Store food in sealed containers</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Children and School" id="children">
                  <div className="space-y-4">
                    <h4 className="font-semibold">School Attendance</h4>
                    <p className="text-sm text-gray-700">
                      Children can attend school normally during treatment. Most schools don't require notification
                      for pinworm infections as they're common and easily treatable.
                    </p>

                    <h4 className="font-semibold">Teaching Good Habits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Make handwashing fun with songs or timers</li>
                      <li>• Explain why we don't put fingers in our mouth</li>
                      <li>• Praise good hygiene habits</li>
                      <li>• Keep fingernails short and clean</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Pets and Animals" id="pets">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <strong>Good news:</strong> Human pinworms don't infect pets, and pet worms don't infect humans.
                      Continue normal pet care routines.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands after handling pets (standard practice)</li>
                      <li>• Keep pet areas clean as usual</li>
                      <li>• No need to treat pets for human pinworms</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'intimacy' && (
          <div className="space-y-6">
            <AdultContentWarning>
              <SectionCard title="Intimate Relationships During Treatment" icon={Heart}>
                <div className="space-y-4">
                  <Alert className="border-orange-200 bg-orange-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Intimate relationships can continue with proper precautions. Communication and hygiene are key.
                    </AlertDescription>
                  </Alert>

                  <CollapsibleSection title="Physical Intimacy Guidelines" id="intimacy-physical">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Before Intimacy</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Both partners shower beforehand</li>
                        <li>• Trim and clean fingernails</li>
                        <li>• Avoid anal contact or use barriers</li>
                        <li>• Consider using gloves for manual contact</li>
                      </ul>

                      <h4 className="font-semibold">After Intimacy</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Wash hands and genital areas thoroughly</li>
                        <li>• Change underwear and sleepwear</li>
                        <li>• Wash bedding if there was significant contact</li>
                      </ul>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Communication with Partners" id="intimacy-communication">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Having the Conversation</h4>
                      <p className="text-sm text-gray-700">
                        "I have a common, easily treatable condition called pinworms. It's not an STI - it's 
                        something that affects millions of people. Here's what we need to know..."
                      </p>

                      <h4 className="font-semibold">Key Points to Share</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• It's a common childhood infection that adults can get</li>
                        <li>• It's completely treatable with medication</li>
                        <li>• It's not related to cleanliness or lifestyle</li>
                        <li>• We can still be intimate with precautions</li>
                      </ul>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Long-term Relationships" id="intimacy-longterm">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Treatment Together</h4>
                      <p className="text-sm text-gray-700">
                        Partners living together should typically be treated simultaneously to prevent reinfection,
                        even if only one person has symptoms.
                      </p>

                      <h4 className="font-semibold">Maintaining Connection</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Focus on non-genital intimacy during treatment</li>
                        <li>• Maintain emotional closeness through communication</li>
                        <li>• Remember this is temporary (2-4 weeks typically)</li>
                        <li>• Support each other through the treatment process</li>
                      </ul>
                    </div>
                  </CollapsibleSection>
                </div>
              </SectionCard>
            </AdultContentWarning>
          </div>
        )}

        {activeSection === 'activities' && (
          <div className="space-y-6">
            <SectionCard title="Daily Activities and Social Life" icon={Activity}>
              <div className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Most daily activities can continue normally. The key is maintaining good hygiene practices.
                  </AlertDescription>
                </Alert>

                <CollapsibleSection title="Work and Professional Life" id="work">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Office Environment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands frequently, especially before eating</li>
                      <li>• Wipe down your workspace daily</li>
                      <li>• Avoid sharing personal items like water bottles</li>
                      <li>• No need to inform colleagues or take time off</li>
                    </ul>

                    <h4 className="font-semibold">Food Service Workers</h4>
                    <p className="text-sm text-gray-700">
                      Follow your workplace's health policies. Many jurisdictions don't require time off for pinworms
                      if proper hand hygiene is maintained.
                    </p>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Exercise and Sports" id="exercise">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Gym and Fitness Centers</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Shower immediately after workouts</li>
                      <li>• Bring your own towel</li>
                      <li>• Wipe down equipment before and after use</li>
                      <li>• Wash workout clothes in hot water</li>
                    </ul>

                    <h4 className="font-semibold">Swimming</h4>
                    <p className="text-sm text-gray-700">
                      Swimming is generally safe. Chlorinated pools help kill eggs. Shower before and after swimming,
                      and wash swimwear in hot water.
                    </p>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Social Activities" id="social">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Dining Out</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands before eating</li>
                      <li>• Avoid touching your face during meals</li>
                      <li>• Normal restaurant hygiene practices apply</li>
                    </ul>

                    <h4 className="font-semibold">Social Gatherings</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain normal social activities</li>
                      <li>• Practice good hand hygiene</li>
                      <li>• Avoid sharing personal items</li>
                      <li>• No need to avoid handshakes or hugs</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Travel" id="travel">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Packing Essentials</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pack extra underwear and sleepwear</li>
                      <li>• Bring hand sanitizer for when soap isn't available</li>
                      <li>• Pack your medication if traveling during treatment</li>
                    </ul>

                    <h4 className="font-semibold">Hotel Stays</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Request fresh linens if staying multiple nights</li>
                      <li>• Wash hands frequently</li>
                      <li>• Maintain your hygiene routine</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'natural' && (
          <div className="space-y-6">
            <SectionCard title="Natural and Complementary Approaches" icon={Leaf}>
              <div className="space-y-4">
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    While natural approaches may provide support, proven medication remains the most effective treatment.
                    Consult healthcare providers before trying alternative treatments.
                  </AlertDescription>
                </Alert>

                <CollapsibleSection title="Dietary Approaches" id="diet">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Foods That May Help</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Garlic (raw or cooked) - traditional antiparasitic properties</li>
                      <li>• Pumpkin seeds - contain compounds that may affect worms</li>
                      <li>• Coconut oil - medium-chain fatty acids</li>
                      <li>• Probiotic foods - support gut health</li>
                      <li>• High-fiber foods - support digestive health</li>
                    </ul>

                    <h4 className="font-semibold">Foods to Limit</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Refined sugars and processed foods</li>
                      <li>• Simple carbohydrates</li>
                      <li>• Foods that may irritate the digestive system</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Herbal Approaches" id="herbs">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> These are traditional approaches with limited scientific evidence.
                      Always consult healthcare providers, especially if taking other medications.
                    </p>

                    <h4 className="font-semibold">Traditional Herbs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wormwood (Artemisia absinthium) - traditional antiparasitic</li>
                      <li>• Black walnut hulls - traditional use for parasites</li>
                      <li>• Cloves - may have antiparasitic properties</li>
                      <li>• Oregano oil - antimicrobial properties</li>
                    </ul>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Cautions</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Some herbs can interact with medications</li>
                        <li>• Dosages and purity vary in supplements</li>
                        <li>• Not recommended for pregnant or nursing women</li>
                        <li>• May cause digestive upset in some people</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Lifestyle Support" id="lifestyle">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Stress Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Practice relaxation techniques</li>
                      <li>• Maintain regular sleep schedule</li>
                      <li>• Stay physically active</li>
                      <li>• Connect with supportive friends and family</li>
                    </ul>

                    <h4 className="font-semibold">Immune System Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Eat a balanced, nutritious diet</li>
                      <li>• Get adequate sleep (7-9 hours)</li>
                      <li>• Stay hydrated</li>
                      <li>• Consider vitamin D if deficient</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'guidelines' && (
          <div className="space-y-6">
            <SectionCard title="Medical Guidelines and When to Seek Help" icon={CheckCircle}>
              <div className="space-y-4">
                <CollapsibleSection title="When to See a Healthcare Provider" id="medical-help">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600">Seek Immediate Medical Attention If:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Severe abdominal pain</li>
                      <li>• High fever (over 101°F/38.3°C)</li>
                      <li>• Signs of severe allergic reaction to medication</li>
                      <li>• Persistent vomiting</li>
                    </ul>

                    <h4 className="font-semibold text-orange-600">Schedule an Appointment If:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Symptoms persist after completing full treatment</li>
                      <li>• Recurring infections (more than 2-3 times per year)</li>
                      <li>• Severe itching interfering with sleep</li>
                      <li>• Signs of secondary bacterial infection from scratching</li>
                      <li>• Pregnant or breastfeeding and need treatment</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Medication Guidelines" id="medication">
                  <div className="space-y-4">
                    <h4 className="font-semibold">First-Line Treatments</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold">Mebendazole</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Single dose, repeat in 14 days</li>
                          <li>• Can be taken with or without food</li>
                          <li>• Safe for children over 2 years</li>
                          <li>• Prescription required in most countries</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold">Albendazole</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Single dose, repeat in 14 days</li>
                          <li>• Take with fatty food for better absorption</li>
                          <li>• Alternative to mebendazole</li>
                          <li>• Prescription required</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold">Pyrantel Pamoate</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Single dose, repeat in 14 days</li>
                          <li>• Available over-the-counter</li>
                          <li>• Safe for children over 2 years</li>
                          <li>• Take with or without food</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Important Medication Notes</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• All household members should be treated simultaneously</li>
                        <li>• Complete both doses even if symptoms improve</li>
                        <li>• The 14-day gap targets the pinworm life cycle</li>
                        <li>• Side effects are generally mild (nausea, stomach upset)</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Special Populations" id="special-populations">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Pregnancy and Breastfeeding</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Consult healthcare provider before taking any medication</li>
                      <li>• Focus on hygiene measures during first trimester</li>
                      <li>• Some medications may be used in later pregnancy</li>
                      <li>• Breastfeeding mothers should discuss options with providers</li>
                    </ul>

                    <h4 className="font-semibold">Young Children (Under 2 years)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Consult pediatrician for treatment options</li>
                      <li>• Focus on hygiene and environmental measures</li>
                      <li>• Keep fingernails very short</li>
                      <li>• Change diapers frequently and wash hands thoroughly</li>
                    </ul>

                    <h4 className="font-semibold">Immunocompromised Individuals</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• May need extended or repeated treatment courses</li>
                      <li>• Close monitoring by healthcare providers</li>
                      <li>• Extra attention to hygiene measures</li>
                      <li>• Consider family/household treatment</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Prevention and Recurrence" id="prevention">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Preventing Reinfection</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain good hand hygiene practices</li>
                      <li>• Keep fingernails short and clean</li>
                      <li>• Wash underwear and bedding in hot water</li>
                      <li>• Avoid nail biting and thumb sucking</li>
                    </ul>

                    <h4 className="font-semibold">If Infections Keep Recurring</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Ensure all household members are treated</li>
                      <li>• Review and strengthen hygiene practices</li>
                      <li>• Consider environmental factors (daycare, school)</li>
                      <li>• Discuss extended treatment with healthcare provider</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}
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
