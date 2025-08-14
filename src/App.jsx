// Updated for Vite deployment - Complete Pinworm Guide - COMPREHENSIVE RESTORATION
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
                  },
                  {
                    phase: "Phase 5: Medical Treatment",
                    goal: "Eliminate worms with proven medication",
                    actions: [
                      "Request mebendazole, albendazole, or pyrantel pamoate",
                      "Entire household takes medication simultaneously",
                      "Standard: single dose + repeat exactly 14 days later",
                      "Complete both doses even if symptoms improve"
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

                {/* ENHANCED MEDICATION COMPARISON - Preserving the new comprehensive medication information */}
                <Card className="border-orange-200 bg-orange-50">
                  <CollapsibleSection title="📋 Detailed Medication Comparison" id="medication-comparison">
                    <div className="space-y-6">
                      <Alert className="border-blue-200 bg-blue-50">
                        <Pill className="h-4 w-4" />
                        <AlertDescription>
                          All three medications are highly effective against pinworms. Choice often depends on availability, age, and regional preferences.
                        </AlertDescription>
                      </Alert>

                      {/* Medication Cards */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-blue-200 bg-blue-50">
                          <CardHeader>
                            <CardTitle className="text-blue-800">Mebendazole</CardTitle>
                            <CardDescription>First-line treatment</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-sm">How it works:</h4>
                              <p className="text-xs text-gray-700">Prevents worms from absorbing glucose, causing them to die within 2-3 days</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Duration in body:</h4>
                              <p className="text-xs text-gray-700">Active for 2-3 days, minimal absorption into bloodstream</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Dosage:</h4>
                              <p className="text-xs text-gray-700">Single 100mg dose, repeat after 14 days</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Availability:</h4>
                              <p className="text-xs text-gray-700">Prescription required in most countries</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Food requirements:</h4>
                              <p className="text-xs text-gray-700">Can be taken with or without food</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-green-200 bg-green-50">
                          <CardHeader>
                            <CardTitle className="text-green-800">Albendazole</CardTitle>
                            <CardDescription>Alternative option</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-sm">How it works:</h4>
                              <p className="text-xs text-gray-700">Disrupts worm cell structure and energy production</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Duration in body:</h4>
                              <p className="text-xs text-gray-700">Active for 8-12 hours, better tissue penetration</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Dosage:</h4>
                              <p className="text-xs text-gray-700">Single 400mg dose, repeat after 14 days</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Availability:</h4>
                              <p className="text-xs text-gray-700">Prescription required, widely available globally</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Food requirements:</h4>
                              <p className="text-xs text-gray-700">Take with fatty food for better absorption</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-orange-200 bg-orange-50">
                          <CardHeader>
                            <CardTitle className="text-orange-800">Pyrantel Pamoate</CardTitle>
                            <CardDescription>Over-the-counter</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-sm">How it works:</h4>
                              <p className="text-xs text-gray-700">Paralyzes worms by blocking nerve transmission</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Duration in body:</h4>
                              <p className="text-xs text-gray-700">Active for 24-48 hours, minimal absorption</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Dosage:</h4>
                              <p className="text-xs text-gray-700">11mg/kg body weight, repeat after 14 days</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Availability:</h4>
                              <p className="text-xs text-gray-700">Over-the-counter in many countries (Pin-X, Reese's)</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">Food requirements:</h4>
                              <p className="text-xs text-gray-700">Can be taken with or without food</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* International Treatment Protocols */}
                      <Card className="border-yellow-200 bg-yellow-50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-yellow-800">
                            <Info className="h-4 w-4" />
                            International Treatment Protocols
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-red-600 flex items-center gap-2 mb-3">
                                🇩🇰 Denmark - 3-Phase Protocol:
                              </h4>
                              <ul className="space-y-2 text-sm">
                                <li><strong>• Day 0:</strong> First mebendazole dose</li>
                                <li><strong>• Day 14:</strong> Second dose (standard)</li>
                                <li><strong>• Day 28:</strong> Third dose (additional 2 weeks later)</li>
                                <li><strong>• Rationale:</strong> Addresses potential reinfection cycles</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-600 flex items-center gap-2 mb-3">
                                🌍 Other Regional Variations:
                              </h4>
                              <ul className="space-y-2 text-sm">
                                <li><strong>• UK/Australia:</strong> Single dose mebendazole often sufficient</li>
                                <li><strong>• USA:</strong> Pyrantel pamoate commonly used (OTC)</li>
                                <li><strong>• WHO Guidelines:</strong> Albendazole for mass treatment programs</li>
                                <li><strong>• Canada:</strong> Mebendazole preferred, 2-dose standard</li>
                              </ul>
                            </div>
                          </div>
                          <Alert className="border-orange-200 bg-orange-50 mt-4">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Important:</strong> Always follow your healthcare provider's specific instructions and local treatment guidelines, which may differ from standard protocols based on regional experience and resistance patterns.
                            </AlertDescription>
                          </Alert>
                        </CardContent>
                      </Card>
                    </div>
                  </CollapsibleSection>
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
                      <li>• Wash bedding weekly in hot water (60°C/140°F minimum)</li>
                      <li>• Vacuum carpets and upholstery regularly</li>
                      <li>• Wipe down frequently touched surfaces (doorknobs, light switches, remote controls)</li>
                      <li>• Use separate laundry baskets for each family member during treatment</li>
                    </ul>

                    <h4 className="font-semibold">Kitchen Safety</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands thoroughly before food preparation</li>
                      <li>• Clean surfaces with soap and water before cooking</li>
                      <li>• Individual plates and utensils (normal dishwashing is sufficient)</li>
                      <li>• Store food in sealed containers to prevent contamination</li>
                      <li>• Wash fruits and vegetables thoroughly before eating</li>
                      <li>• Use separate cutting boards for different family members if possible</li>
                    </ul>

                    <h4 className="font-semibold">Laundry Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash underwear, pajamas, and towels daily in hot water</li>
                      <li>• Dry on high heat for at least 40 minutes</li>
                      <li>• Handle dirty laundry carefully - don't shake items</li>
                      <li>• Wash hands after handling dirty laundry</li>
                      <li>• Consider using disposable gloves when sorting laundry</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Children and School" id="children">
                  <div className="space-y-4">
                    <h4 className="font-semibold">School Attendance</h4>
                    <p className="text-sm text-gray-700">
                      Children can attend school normally during treatment. Most schools don't require notification
                      for pinworm infections as they're common and easily treatable. However, check your school's
                      specific health policies.
                    </p>

                    <h4 className="font-semibold">Teaching Good Habits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Make handwashing fun with songs or timers (20-second rule)</li>
                      <li>• Explain why we don't put fingers in our mouth in age-appropriate terms</li>
                      <li>• Praise good hygiene habits consistently</li>
                      <li>• Keep fingernails short and clean - make it a fun grooming activity</li>
                      <li>• Teach proper wiping technique (front to back)</li>
                      <li>• Create visual reminders for handwashing near sinks</li>
                    </ul>

                    <h4 className="font-semibold">School Communication</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Most schools don't require notification for pinworm treatment</li>
                      <li>• If your child has symptoms at school, inform the nurse discreetly</li>
                      <li>• Emphasize that this is a common, treatable condition</li>
                      <li>• Pack extra underwear in backpack during treatment period</li>
                    </ul>

                    <h4 className="font-semibold">Managing Siblings</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• All siblings should be treated simultaneously</li>
                      <li>• Avoid sharing beds during treatment period</li>
                      <li>• Individual towels and washcloths for each child</li>
                      <li>• Supervise younger children's hygiene practices</li>
                      <li>• Address any teasing or embarrassment between siblings</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Pets and Animals" id="pets">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <strong>Good news:</strong> Human pinworms don't infect pets, and pet worms don't infect humans.
                      Continue normal pet care routines without worry.
                    </p>
                    
                    <h4 className="font-semibold">Pet Care During Treatment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands after handling pets (standard practice always)</li>
                      <li>• Keep pet areas clean as usual</li>
                      <li>• No need to treat pets for human pinworms</li>
                      <li>• Continue normal grooming and feeding routines</li>
                      <li>• Pets can sleep in usual places - no restrictions needed</li>
                    </ul>

                    <h4 className="font-semibold">Common Misconceptions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Cats and dogs cannot get human pinworms</li>
                      <li>• Pet deworming medications are different and unnecessary</li>
                      <li>• No need to isolate pets from family members</li>
                      <li>• Pet bedding doesn't need special treatment</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Extended Family and Visitors" id="visitors">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Grandparents and Relatives</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Brief relatives who provide childcare about hygiene measures</li>
                      <li>• Provide extra underwear and pajamas for overnight stays</li>
                      <li>• Explain the importance of morning showers</li>
                      <li>• Share medication schedule if treatment spans visits</li>
                    </ul>

                    <h4 className="font-semibold">Having Guests Over</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Normal social activities can continue</li>
                      <li>• Ensure guest bathroom has individual towels</li>
                      <li>• Extra attention to handwashing before meals</li>
                      <li>• No need to cancel planned gatherings</li>
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
                        <li>• Avoid anal contact or use barriers (condoms, dental dams)</li>
                        <li>• Consider using gloves for manual contact</li>
                        <li>• Fresh underwear for both partners</li>
                        <li>• Clean bedding is recommended</li>
                      </ul>

                      <h4 className="font-semibold">During Intimacy</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Avoid oral-anal contact completely</li>
                        <li>• Be mindful of hand-to-mouth contact</li>
                        <li>• Consider barrier methods for additional protection</li>
                        <li>• Focus on positions that minimize anal area contact</li>
                      </ul>

                      <h4 className="font-semibold">After Intimacy</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Wash hands and genital areas thoroughly with soap</li>
                        <li>• Both partners should urinate to flush any potential contamination</li>
                        <li>• Change underwear and sleepwear</li>
                        <li>• Wash bedding if there was significant contact</li>
                        <li>• Shower together or separately - whatever feels comfortable</li>
                      </ul>

                      <h4 className="font-semibold">Timeline Considerations</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Most cautious approach: wait 2-3 days after second medication dose</li>
                        <li>• Moderate approach: maintain precautions throughout treatment</li>
                        <li>• Continue good hygiene practices for 2 weeks after treatment</li>
                        <li>• Resume normal intimacy once treatment is complete and symptoms resolved</li>
                      </ul>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Communication with Partners" id="intimacy-communication">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Having the Conversation</h4>
                      <p className="text-sm text-gray-700">
                        "I have a common, easily treatable condition called pinworms. It's not an STI - it's 
                        something that affects millions of people, including many adults. Here's what we need to know..."
                      </p>

                      <h4 className="font-semibold">Key Points to Share</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• It's a common childhood infection that adults can get</li>
                        <li>• It's completely treatable with medication (2-4 week process)</li>
                        <li>• It's not related to cleanliness, lifestyle, or sexual activity</li>
                        <li>• We can still be intimate with some precautions</li>
                        <li>• It's not embarrassing - it happens to millions of people</li>
                        <li>• Treatment is simple and highly effective</li>
                      </ul>

                      <h4 className="font-semibold">Addressing Partner Concerns</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Reassure that it's not sexually transmitted</li>
                        <li>• Explain the simple hygiene precautions needed</li>
                        <li>• Emphasize that it's temporary (2-4 weeks typically)</li>
                        <li>• Share reliable information sources</li>
                        <li>• Discuss whether partner should also be treated</li>
                      </ul>

                      <h4 className="font-semibold">For New Relationships</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Honesty builds trust - explain it's a common medical condition</li>
                        <li>• Emphasize that it's easily treatable and temporary</li>
                        <li>• Suggest waiting until treatment is complete if they're uncomfortable</li>
                        <li>• Use it as an opportunity to discuss health communication</li>
                      </ul>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Long-term Relationships" id="intimacy-longterm">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Treatment Together</h4>
                      <p className="text-sm text-gray-700">
                        Partners living together should typically be treated simultaneously to prevent reinfection,
                        even if only one person has symptoms. Consult healthcare providers about partner treatment.
                      </p>

                      <h4 className="font-semibold">Maintaining Connection</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Focus on non-genital intimacy during treatment</li>
                        <li>• Maintain emotional closeness through communication</li>
                        <li>• Remember this is temporary (2-4 weeks typically)</li>
                        <li>• Support each other through the treatment process</li>
                        <li>• Use this time for other forms of bonding</li>
                        <li>• Plan special activities for after treatment completion</li>
                      </ul>

                      <h4 className="font-semibold">Couples Living Together</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Individual towels and washcloths</li>
                        <li>• Separate underwear storage during treatment</li>
                        <li>• Both partners follow hygiene protocols</li>
                        <li>• Coordinate medication schedules</li>
                        <li>• Wash bedding more frequently</li>
                        <li>• Support each other's treatment compliance</li>
                      </ul>

                      <h4 className="font-semibold">Emotional Support</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Acknowledge any embarrassment or anxiety</li>
                        <li>• Reassure each other that this is common and treatable</li>
                        <li>• Maintain physical affection in other ways</li>
                        <li>• Focus on the temporary nature of precautions</li>
                        <li>• Celebrate treatment milestones together</li>
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
                      <li>• Wipe down your workspace daily with disinfectant wipes</li>
                      <li>• Avoid sharing personal items like water bottles, utensils</li>
                      <li>• No need to inform colleagues or take time off</li>
                      <li>• Use hand sanitizer when soap and water aren't available</li>
                      <li>• Pack extra underwear in work bag during treatment</li>
                    </ul>

                    <h4 className="font-semibold">Food Service Workers</h4>
                    <p className="text-sm text-gray-700">
                      Follow your workplace's health policies. Many jurisdictions don't require time off for pinworms
                      if proper hand hygiene is maintained. Check with your supervisor or occupational health department.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Extra vigilant handwashing before food handling</li>
                      <li>• Use gloves when required by workplace policy</li>
                      <li>• Inform supervisor if workplace policy requires disclosure</li>
                      <li>• Follow all standard food safety protocols</li>
                    </ul>

                    <h4 className="font-semibold">Healthcare Workers</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Follow your institution's infection control policies</li>
                      <li>• Extra attention to hand hygiene between patients</li>
                      <li>• Consider informing occupational health if required</li>
                      <li>• Use standard precautions with all patients</li>
                    </ul>

                    <h4 className="font-semibold">Childcare Workers</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Follow facility policies regarding infectious conditions</li>
                      <li>• Extra vigilant about handwashing after diaper changes</li>
                      <li>• Supervise children's handwashing more closely</li>
                      <li>• May need to inform supervisor depending on policies</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Exercise and Sports" id="exercise">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Gym and Fitness Centers</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Shower immediately after workouts</li>
                      <li>• Bring your own towel and avoid sharing</li>
                      <li>• Wipe down equipment before and after use</li>
                      <li>• Wash workout clothes in hot water after each use</li>
                      <li>• Use flip-flops in locker rooms and showers</li>
                      <li>• Pack extra underwear in gym bag</li>
                    </ul>

                    <h4 className="font-semibold">Swimming</h4>
                    <p className="text-sm text-gray-700">
                      Swimming is generally safe. Chlorinated pools help kill eggs. However, maintain good hygiene practices.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Shower before and after swimming</li>
                      <li>• Wash swimwear in hot water after each use</li>
                      <li>• Avoid swallowing pool water</li>
                      <li>• Use clean towels and avoid sharing</li>
                      <li>• Change out of wet swimwear promptly</li>
                    </ul>

                    <h4 className="font-semibold">Team Sports</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Continue participation - no restrictions needed</li>
                      <li>• Shower after practice/games</li>
                      <li>• Wash uniforms in hot water</li>
                      <li>• Don't share water bottles or towels</li>
                      <li>• Extra attention to hand hygiene</li>
                    </ul>

                    <h4 className="font-semibold">Yoga and Group Fitness</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Bring your own yoga mat and towel</li>
                      <li>• Wipe down shared equipment before use</li>
                      <li>• Shower after class if possible</li>
                      <li>• Wash workout clothes immediately after class</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Social Activities" id="social">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Dining Out</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wash hands before eating or use hand sanitizer</li>
                      <li>• Avoid touching your face during meals</li>
                      <li>• Normal restaurant hygiene practices apply</li>
                      <li>• No need to avoid sharing appetizers or desserts</li>
                      <li>• Use utensils rather than fingers when possible</li>
                    </ul>

                    <h4 className="font-semibold">Social Gatherings</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Maintain normal social activities - no isolation needed</li>
                      <li>• Practice good hand hygiene throughout events</li>
                      <li>• Avoid sharing personal items (drinks, utensils)</li>
                      <li>• No need to avoid handshakes or hugs</li>
                      <li>• Wash hands before eating at parties</li>
                      <li>• Use bathroom facilities normally</li>
                    </ul>

                    <h4 className="font-semibold">Movie Theaters and Entertainment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Normal activities can continue</li>
                      <li>• Wash hands before eating snacks</li>
                      <li>• Avoid touching face during movies</li>
                      <li>• Use hand sanitizer if available</li>
                    </ul>

                    <h4 className="font-semibold">Religious Services and Community Events</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Continue normal attendance</li>
                      <li>• Practice good hand hygiene</li>
                      <li>• No special precautions needed for communal activities</li>
                      <li>• Wash hands before and after communal meals</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Travel" id="travel">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Packing Essentials</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pack extra underwear and sleepwear (2x normal amount)</li>
                      <li>• Bring hand sanitizer for when soap isn't available</li>
                      <li>• Pack your medication if traveling during treatment</li>
                      <li>• Include disinfectant wipes for surfaces</li>
                      <li>• Bring individual towels if staying with others</li>
                      <li>• Pack plastic bags for dirty laundry separation</li>
                    </ul>

                    <h4 className="font-semibold">Hotel Stays</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Request fresh linens if staying multiple nights</li>
                      <li>• Wash hands frequently, especially before eating</li>
                      <li>• Maintain your hygiene routine (morning showers)</li>
                      <li>• Use hotel laundry services or find local laundromat</li>
                      <li>• Wipe down frequently touched surfaces in room</li>
                    </ul>

                    <h4 className="font-semibold">Air Travel</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pack medication in carry-on bag</li>
                      <li>• Use hand sanitizer frequently during flight</li>
                      <li>• Wipe down tray table and armrests</li>
                      <li>• Avoid touching face during flight</li>
                      <li>• Shower upon arrival at destination</li>
                    </ul>

                    <h4 className="font-semibold">Staying with Friends/Family</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Inform hosts about basic hygiene needs</li>
                      <li>• Bring your own towels and washcloths</li>
                      <li>• Offer to do your own laundry in hot water</li>
                      <li>• Maintain morning shower routine</li>
                      <li>• Be discreet but thorough with hygiene practices</li>
                    </ul>

                    <h4 className="font-semibold">International Travel</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Research medication availability at destination</li>
                      <li>• Bring sufficient medication for entire trip</li>
                      <li>• Pack extra supplies in case of delays</li>
                      <li>• Know basic hygiene terms in local language</li>
                      <li>• Locate medical facilities at destination if needed</li>
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
                      <li>• <strong>Garlic (raw or cooked)</strong> - Traditional antiparasitic properties, contains allicin</li>
                      <li>• <strong>Pumpkin seeds</strong> - Contain cucurbitacin compounds that may affect worms</li>
                      <li>• <strong>Coconut oil</strong> - Medium-chain fatty acids (caprylic acid) may have antiparasitic effects</li>
                      <li>• <strong>Probiotic foods</strong> - Yogurt, kefir, sauerkraut support gut health</li>
                      <li>• <strong>High-fiber foods</strong> - Support digestive health and regular bowel movements</li>
                      <li>• <strong>Papaya seeds</strong> - Traditional use for parasites, contains papain enzyme</li>
                      <li>• <strong>Turmeric</strong> - Anti-inflammatory properties, may support immune function</li>
                    </ul>

                    <h4 className="font-semibold">Foods to Limit During Treatment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Refined sugars and processed foods</strong> - May feed harmful bacteria</li>
                      <li>• <strong>Simple carbohydrates</strong> - White bread, pasta, sugary snacks</li>
                      <li>• <strong>Alcohol</strong> - Can interfere with immune function</li>
                      <li>• <strong>Foods that may irritate the digestive system</strong> - Spicy foods if sensitive</li>
                    </ul>

                    <h4 className="font-semibold">Supportive Nutrition</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Vitamin C-rich foods</strong> - Citrus fruits, berries, bell peppers</li>
                      <li>• <strong>Zinc-rich foods</strong> - Pumpkin seeds, nuts, lean meats</li>
                      <li>• <strong>B-complex vitamins</strong> - Whole grains, leafy greens</li>
                      <li>• <strong>Adequate protein</strong> - Support immune system function</li>
                      <li>• <strong>Plenty of water</strong> - Support overall health and digestion</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Important Notes</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Dietary approaches should complement, not replace, medical treatment</li>
                        <li>• Individual responses to foods vary greatly</li>
                        <li>• Maintain a balanced diet rather than extreme restrictions</li>
                        <li>• Consult healthcare providers about significant dietary changes</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Herbal Approaches" id="herbs">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> These are traditional approaches with limited scientific evidence for pinworms specifically.
                      Always consult healthcare providers, especially if taking other medications or have health conditions.
                    </p>

                    <h4 className="font-semibold">Traditional Herbs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Wormwood (Artemisia absinthium)</strong> - Traditional antiparasitic, bitter compounds</li>
                      <li>• <strong>Black walnut hulls</strong> - Traditional use for parasites, contains juglone</li>
                      <li>• <strong>Cloves</strong> - May have antiparasitic properties, contains eugenol</li>
                      <li>• <strong>Oregano oil</strong> - Antimicrobial properties, contains carvacrol</li>
                      <li>• <strong>Thyme</strong> - Traditional antiparasitic, contains thymol</li>
                      <li>• <strong>Grapefruit seed extract</strong> - Antimicrobial properties</li>
                    </ul>

                    <h4 className="font-semibold">Preparation and Dosage Considerations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Herbal preparations vary widely in potency and purity</li>
                      <li>• Start with small amounts to test tolerance</li>
                      <li>• Quality varies significantly between manufacturers</li>
                      <li>• Some herbs may interact with medications</li>
                      <li>• Consult qualified herbalist or healthcare provider</li>
                    </ul>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Important Cautions</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Some herbs can interact with medications</li>
                        <li>• Dosages and purity vary significantly in supplements</li>
                        <li>• Not recommended for pregnant or nursing women</li>
                        <li>• May cause digestive upset in some people</li>
                        <li>• Can interfere with certain medical conditions</li>
                        <li>• Quality control varies between manufacturers</li>
                        <li>• Some herbs may be toxic in large amounts</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">Evidence-Based Perspective</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Limited scientific research on herbal treatments for pinworms</li>
                      <li>• Most evidence is anecdotal or from traditional use</li>
                      <li>• Prescription medications have proven efficacy rates of 90-100%</li>
                      <li>• Herbs may be useful as supportive therapy alongside medication</li>
                      <li>• Consult healthcare providers for evidence-based treatment</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Lifestyle Support" id="lifestyle">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Stress Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Practice relaxation techniques</strong> - Deep breathing, meditation</li>
                      <li>• <strong>Maintain regular sleep schedule</strong> - 7-9 hours per night</li>
                      <li>• <strong>Stay physically active</strong> - Regular exercise supports immune function</li>
                      <li>• <strong>Connect with supportive friends and family</strong> - Don't isolate yourself</li>
                      <li>• <strong>Limit news and social media</strong> - Reduce anxiety-provoking content</li>
                      <li>• <strong>Practice mindfulness</strong> - Stay present rather than worrying</li>
                    </ul>

                    <h4 className="font-semibold">Immune System Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Eat a balanced, nutritious diet</strong> - Variety of whole foods</li>
                      <li>• <strong>Get adequate sleep</strong> - 7-9 hours consistently</li>
                      <li>• <strong>Stay hydrated</strong> - 8-10 glasses of water daily</li>
                      <li>• <strong>Consider vitamin D</strong> - Especially if deficient or limited sun exposure</li>
                      <li>• <strong>Moderate exercise</strong> - Avoid overexertion during treatment</li>
                      <li>• <strong>Manage stress levels</strong> - Chronic stress weakens immunity</li>
                    </ul>

                    <h4 className="font-semibold">Sleep Hygiene During Treatment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Consistent bedtime routine</strong> - Same time each night</li>
                      <li>• <strong>Clean pajamas daily</strong> - Fresh sleepwear each night</li>
                      <li>• <strong>Comfortable sleep environment</strong> - Cool, dark, quiet</li>
                      <li>• <strong>Avoid scratching during sleep</strong> - Keep nails short, consider gloves</li>
                      <li>• <strong>Morning shower routine</strong> - Remove any eggs laid overnight</li>
                    </ul>

                    <h4 className="font-semibold">Mental Health Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Acknowledge feelings</strong> - Embarrassment and anxiety are normal</li>
                      <li>• <strong>Focus on facts</strong> - This is common, treatable, temporary</li>
                      <li>• <strong>Maintain perspective</strong> - Millions of people experience this</li>
                      <li>• <strong>Seek support</strong> - Talk to trusted friends or healthcare providers</li>
                      <li>• <strong>Practice self-compassion</strong> - Be kind to yourself</li>
                      <li>• <strong>Stay engaged</strong> - Continue normal activities and interests</li>
                    </ul>

                    <h4 className="font-semibold">Environmental Wellness</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Fresh air and sunlight</strong> - Spend time outdoors daily</li>
                      <li>• <strong>Clean living spaces</strong> - Organized, clutter-free environment</li>
                      <li>• <strong>Natural lighting</strong> - Open curtains during day</li>
                      <li>• <strong>Plants and nature</strong> - Bring natural elements indoors</li>
                      <li>• <strong>Minimize toxins</strong> - Use natural cleaning products when possible</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Complementary Therapies" id="complementary">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Mind-Body Approaches</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Yoga</strong> - Gentle practice, avoid inverted poses during active infection</li>
                      <li>• <strong>Meditation</strong> - Reduce stress and support immune function</li>
                      <li>• <strong>Acupuncture</strong> - May support overall wellness (inform practitioner)</li>
                      <li>• <strong>Massage therapy</strong> - Avoid abdominal massage during treatment</li>
                      <li>• <strong>Deep breathing exercises</strong> - Simple stress reduction technique</li>
                    </ul>

                    <h4 className="font-semibold">Energy and Movement</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Gentle exercise</strong> - Walking, swimming, light stretching</li>
                      <li>• <strong>Avoid intense workouts</strong> - During active treatment phase</li>
                      <li>• <strong>Listen to your body</strong> - Rest when needed</li>
                      <li>• <strong>Maintain movement</strong> - Supports digestion and circulation</li>
                    </ul>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Integration with Medical Treatment</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Use complementary approaches alongside, not instead of, medication</li>
                        <li>• Inform all practitioners about your pinworm treatment</li>
                        <li>• Focus on approaches that support overall health</li>
                        <li>• Avoid anything that might interfere with medication absorption</li>
                        <li>• Maintain realistic expectations about complementary therapies</li>
                      </ul>
                    </div>
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
                
                {/* RESTORED: Treatment Progression Timeline - The boxes you liked! */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Clock className="h-5 w-5" />
                      Treatment Timeline & What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Day 0-1</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Take first medication dose</li>
                            <li>• Begin hygiene protocol</li>
                            <li>• Start environmental cleaning</li>
                            <li>• Symptoms may persist</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Day 2-7</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Adult worms begin dying</li>
                            <li>• Itching may decrease</li>
                            <li>• Continue hygiene measures</li>
                            <li>• May see dead worms in stool</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Day 8-13</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Symptoms should improve</li>
                            <li>• Maintain hygiene routine</li>
                            <li>• Prepare for second dose</li>
                            <li>• Don't stop precautions yet</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">Day 14+</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Take second medication dose</li>
                            <li>• Continue hygiene 1 more week</li>
                            <li>• Symptoms should resolve</li>
                            <li>• Gradually return to normal</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Denmark 3-Phase Protocol Timeline */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">🇩🇰 Denmark 3-Phase Protocol Timeline:</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="bg-white p-3 rounded border">
                              <strong>Day 0</strong><br/>
                              <span className="text-sm">First dose</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-white p-3 rounded border">
                              <strong>Day 14</strong><br/>
                              <span className="text-sm">Second dose</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="bg-white p-3 rounded border">
                              <strong>Day 28</strong><br/>
                              <span className="text-sm">Third dose</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700 mt-2">
                          <strong>Rationale:</strong> The third dose addresses potential reinfection cycles and ensures complete elimination.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <CollapsibleSection title="When to See a Healthcare Provider" id="medical-help">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-600">Seek Immediate Medical Attention If:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Severe abdominal pain</strong> - Persistent, cramping, or sharp pain</li>
                      <li>• <strong>High fever</strong> - Over 101°F/38.3°C, especially with other symptoms</li>
                      <li>• <strong>Signs of severe allergic reaction</strong> - Difficulty breathing, swelling, severe rash</li>
                      <li>• <strong>Persistent vomiting</strong> - Unable to keep medication or fluids down</li>
                      <li>• <strong>Signs of dehydration</strong> - Dizziness, dry mouth, decreased urination</li>
                      <li>• <strong>Severe rectal bleeding</strong> - More than small amounts from scratching</li>
                    </ul>

                    <h4 className="font-semibold text-orange-600">Schedule an Appointment If:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Symptoms persist after completing full treatment</strong> - Still itching 1 week after second dose</li>
                      <li>• <strong>Recurring infections</strong> - More than 2-3 times per year</li>
                      <li>• <strong>Severe itching interfering with sleep</strong> - Causing significant sleep disruption</li>
                      <li>• <strong>Signs of secondary bacterial infection</strong> - Increased redness, warmth, pus from scratching</li>
                      <li>• <strong>Pregnant or breastfeeding</strong> - Need treatment guidance</li>
                      <li>• <strong>Immunocompromised</strong> - HIV, cancer treatment, organ transplant</li>
                      <li>• <strong>Children under 2 years</strong> - Need pediatric consultation</li>
                      <li>• <strong>Medication side effects</strong> - Persistent nausea, unusual symptoms</li>
                    </ul>

                    <h4 className="font-semibold text-blue-600">Consider Consultation For:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Family with multiple recurring infections</strong> - May need environmental assessment</li>
                      <li>• <strong>Daycare or school outbreaks</strong> - Coordination of treatment</li>
                      <li>• <strong>Concerns about medication interactions</strong> - Taking other medications</li>
                      <li>• <strong>Questions about treatment approach</strong> - Want to discuss options</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Comprehensive Medication Guidelines" id="medication">
                  <div className="space-y-4">
                    <h4 className="font-semibold">First-Line Treatments - Detailed Comparison</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 bg-blue-50">
                        <h5 className="font-semibold text-blue-800">Mebendazole</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• <strong>Dosage:</strong> Single 100mg dose, repeat in 14 days</li>
                          <li>• <strong>Mechanism:</strong> Prevents glucose absorption by worms</li>
                          <li>• <strong>Food:</strong> Can be taken with or without food</li>
                          <li>• <strong>Age:</strong> Safe for children over 2 years</li>
                          <li>• <strong>Availability:</strong> Prescription required in most countries</li>
                          <li>• <strong>Effectiveness:</strong> 90-100% cure rate with 2 doses</li>
                          <li>• <strong>Side effects:</strong> Rare - mild stomach upset</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4 bg-green-50">
                        <h5 className="font-semibold text-green-800">Albendazole</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• <strong>Dosage:</strong> Single 400mg dose, repeat in 14 days</li>
                          <li>• <strong>Mechanism:</strong> Disrupts worm cell structure</li>
                          <li>• <strong>Food:</strong> Take with fatty food for better absorption</li>
                          <li>• <strong>Age:</strong> Alternative to mebendazole</li>
                          <li>• <strong>Availability:</strong> Prescription required</li>
                          <li>• <strong>Effectiveness:</strong> 95-100% cure rate</li>
                          <li>• <strong>Side effects:</strong> Occasional nausea, headache</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4 bg-orange-50">
                        <h5 className="font-semibold text-orange-800">Pyrantel Pamoate</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• <strong>Dosage:</strong> 11mg/kg body weight, repeat in 14 days</li>
                          <li>• <strong>Mechanism:</strong> Paralyzes worms</li>
                          <li>• <strong>Food:</strong> Take with or without food</li>
                          <li>• <strong>Age:</strong> Safe for children over 2 years</li>
                          <li>• <strong>Availability:</strong> Over-the-counter (Pin-X, Reese's)</li>
                          <li>• <strong>Effectiveness:</strong> 85-95% cure rate</li>
                          <li>• <strong>Side effects:</strong> Mild nausea, stomach cramps</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Critical Medication Guidelines</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Household treatment:</strong> All household members should be treated simultaneously</li>
                        <li>• <strong>Complete both doses:</strong> Even if symptoms improve after first dose</li>
                        <li>• <strong>14-day timing:</strong> The gap targets the pinworm life cycle precisely</li>
                        <li>• <strong>Side effects:</strong> Generally mild - nausea, stomach upset, headache</li>
                        <li>• <strong>Drug interactions:</strong> Minimal, but inform healthcare providers of all medications</li>
                        <li>• <strong>Resistance:</strong> Rare, but may occur with incomplete treatment</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">International Protocol Variations</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h5 className="font-semibold text-red-800">🇩🇰 Denmark Extended Protocol</h5>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• <strong>Day 0:</strong> First mebendazole 100mg dose</li>
                          <li>• <strong>Day 14:</strong> Second dose (standard)</li>
                          <li>• <strong>Day 28:</strong> Third dose (additional)</li>
                          <li>• <strong>Rationale:</strong> Addresses reinfection cycles</li>
                          <li>• <strong>Used for:</strong> Recurring infections, institutional outbreaks</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-800">🌍 WHO Mass Treatment</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• <strong>Medication:</strong> Albendazole 400mg preferred</li>
                          <li>• <strong>Schedule:</strong> Single dose, repeat in 14 days</li>
                          <li>• <strong>Population:</strong> School-based programs</li>
                          <li>• <strong>Monitoring:</strong> Follow-up at 3-4 weeks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Special Populations" id="special-populations">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Pregnancy and Breastfeeding</h4>
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>First trimester:</strong> Focus on hygiene measures, avoid medication if possible</li>
                        <li>• <strong>Second/third trimester:</strong> Mebendazole may be used with provider approval</li>
                        <li>• <strong>Breastfeeding:</strong> Minimal transfer to breast milk, generally safe</li>
                        <li>• <strong>Always consult:</strong> Healthcare provider before taking any medication</li>
                        <li>• <strong>Partner treatment:</strong> Important to prevent reinfection</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">Young Children (Under 2 years)</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Consult pediatrician:</strong> For appropriate treatment options</li>
                        <li>• <strong>Focus on hygiene:</strong> Extra attention to environmental measures</li>
                        <li>• <strong>Keep fingernails very short:</strong> Prevent scratching and reinfection</li>
                        <li>• <strong>Frequent diaper changes:</strong> Wash hands thoroughly after each change</li>
                        <li>• <strong>Family treatment:</strong> Treat other household members</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">Immunocompromised Individuals</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Extended treatment:</strong> May need longer or repeated courses</li>
                        <li>• <strong>Close monitoring:</strong> Regular follow-up with healthcare providers</li>
                        <li>• <strong>Enhanced hygiene:</strong> Extra attention to all preventive measures</li>
                        <li>• <strong>Household treatment:</strong> Essential for all family members</li>
                        <li>• <strong>Specialist consultation:</strong> Consider infectious disease specialist</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">Elderly Patients</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Standard treatment:</strong> Usually same as younger adults</li>
                      <li>• <strong>Monitor for side effects:</strong> May be more sensitive to medications</li>
                      <li>• <strong>Assistance with hygiene:</strong> May need help with thorough cleaning</li>
                      <li>• <strong>Medication interactions:</strong> Review all current medications</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Prevention and Recurrence" id="prevention">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Preventing Initial Infection</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Hand hygiene:</strong> Wash hands frequently with soap and water</li>
                      <li>• <strong>Nail care:</strong> Keep fingernails short and clean</li>
                      <li>• <strong>Avoid nail biting:</strong> And thumb sucking, especially in children</li>
                      <li>• <strong>Morning showers:</strong> Remove any eggs that may be present</li>
                      <li>• <strong>Clean underwear daily:</strong> Fresh underwear each morning</li>
                      <li>• <strong>Wash bedding regularly:</strong> Weekly in hot water</li>
                    </ul>

                    <h4 className="font-semibold">Preventing Reinfection</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Complete full treatment:</strong> Take both medication doses</li>
                      <li>• <strong>Treat entire household:</strong> Simultaneously, even asymptomatic members</li>
                      <li>• <strong>Maintain hygiene during treatment:</strong> Don't stop early</li>
                      <li>• <strong>Environmental cleaning:</strong> Focus on bathrooms and bedrooms</li>
                      <li>• <strong>Laundry management:</strong> Hot water wash, high heat drying</li>
                    </ul>

                    <h4 className="font-semibold">If Infections Keep Recurring</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Ensure complete household treatment:</strong> Include all family members</li>
                        <li>• <strong>Review and strengthen hygiene practices:</strong> Identify gaps in routine</li>
                        <li>• <strong>Consider environmental factors:</strong> Daycare, school, workplace exposure</li>
                        <li>• <strong>Extended treatment protocol:</strong> Discuss Denmark 3-phase approach</li>
                        <li>• <strong>Investigate underlying causes:</strong> Immune system issues, compliance problems</li>
                        <li>• <strong>Professional assessment:</strong> Home visit by public health nurse</li>
                      </ul>
                    </div>

                    <h4 className="font-semibold">Long-term Prevention Strategies</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Education:</strong> Teach family members about transmission</li>
                      <li>• <strong>Routine hygiene:</strong> Make good practices habitual</li>
                      <li>• <strong>Environmental awareness:</strong> Recognize high-risk situations</li>
                      <li>• <strong>Early recognition:</strong> Know symptoms for prompt treatment</li>
                      <li>• <strong>Healthcare relationships:</strong> Establish care with knowledgeable providers</li>
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
              Last updated: 2024 | For educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

