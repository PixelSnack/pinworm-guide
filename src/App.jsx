// Complete Pinworm Guide - Visually Diverse Design Matching Original
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
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              I am 18+ and want to view this content
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children
  }

  // Reusable components for consistent styling
  const SectionCard = ({ children, className = "" }) => (
    <Card className={`mb-6 ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )

  const CollapsibleSection = ({ title, children, icon: Icon, isOpen, onToggle }) => (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-gray-600" />}
          <span className="font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complete Pinworm Management Guide
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A practical, evidence-based guide for families, couples, and individuals worldwide.
              Living normally during treatment.
            </p>
          </div>
          
          {/* Navigation Tabs */}
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-0">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="management" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Management</span>
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Family Life</span>
              </TabsTrigger>
              <TabsTrigger value="intimacy" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Intimacy</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Activities</span>
              </TabsTrigger>
              <TabsTrigger value="natural" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span className="hidden sm:inline">Natural Approaches</span>
              </TabsTrigger>
              <TabsTrigger value="guidelines" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Guidelines</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection}>
          
          {/* Overview Section */}
          <TabsContent value="overview">
            {/* Global Statistics Callout */}
            <Alert className="mb-6 border-blue-200 bg-blue-50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                Pinworms affect millions of people worldwide annually. This is a common, highly treatable condition that occurs across all socioeconomic levels and geographic regions.
              </AlertDescription>
            </Alert>

            <SectionCard>
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Understanding Pinworms</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Pinworms are tiny white parasitic worms (about the size of a staple) that live in your intestines. 
                Female worms crawl out at night to lay microscopic, sticky eggs around the anal area. These eggs become 
                infectious within 6 hours and can survive on surfaces for 2-3 weeks.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Transmission Cycle:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                <li>You accidentally swallow eggs (through hand-to-mouth contact)</li>
                <li>Eggs hatch in your small intestine</li>
                <li>Worms mature in your large intestine over 2-6 weeks</li>
                <li>Females lay new eggs around your anus</li>
                <li>Cycle repeats</li>
              </ol>

              {/* Side-by-side comparison - matching original design */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">What Kills Pinworm Eggs:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Hot water (60°C/140°F or higher)</li>
                    <li>• Regular soap and water</li>
                    <li>• Household disinfectants with alcohol or bleach</li>
                    <li>• High heat from dryers (40+ minutes)</li>
                    <li>• Direct sunlight (UV exposure)</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">What Doesn't Kill Eggs:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Hand sanitizer alone</li>
                    <li>• Cold or lukewarm water</li>
                    <li>• Air fresheners</li>
                    <li>• Surface sprays without disinfectant</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          {/* Management Section - Phase-based layout matching original */}
          <TabsContent value="management">
            <SectionCard>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">5-Phase Management Approach</h2>
              </div>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 1: Immediate Response (First 12 Hours)</h3>
                  <p className="text-blue-600 font-medium mb-4">Goal: Assume eggs are already in your environment and act accordingly</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Everyone in household follows same hygiene measures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Don't share towels, washcloths, or bedding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Begin daily surface cleaning with soap and hot water</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Contact pharmacy/healthcare provider for medication</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 2: Environmental Control (Within 12 Hours)</h3>
                  <p className="text-blue-600 font-medium mb-4">Goal: Kill any eggs already in your space</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Wash all underwear, towels, washcloths, pajamas daily at 60°C (140°F)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Dry on high heat for 40+ minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Clean toilet seats, handles, switches, doorknobs daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Vacuum carpets and mop floors regularly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Individual towels for each person</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 3: Personal Protocol (Ongoing)</h3>
                  <p className="text-blue-600 font-medium mb-4">Goal: Stop re-infecting yourself</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Morning showers daily - removes eggs laid overnight</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Change underwear twice daily (morning and bedtime)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Sleep in snug-fitting underwear</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Keep hands away from mouth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Wipe front-to-back</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Wash hands with soap for 20 seconds frequently</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 4 */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 4: Dietary Support</h3>
                  <p className="text-blue-600 font-medium mb-4">Goal: Support overall digestive health</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>For IBS/Crohn's: Focus on easily digestible foods</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Include lean proteins and cooked vegetables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Consider probiotic foods if tolerated</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Limit excess sugar and refined carbohydrates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Stay well-hydrated</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 5 with Enhanced Medication Information */}
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 5: Medical Treatment</h3>
                  <p className="text-blue-600 font-medium mb-4">Goal: Eliminate worms with proven medication</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Request <span className="font-medium text-blue-600">mebendazole, albendazole, or pyrantel pamoate</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Entire household takes medication simultaneously</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Standard: single dose + repeat exactly 14 days later</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Complete both doses even if symptoms improve</span>
                    </li>
                  </ul>

                  {/* Enhanced Medication Information */}
                  <Collapsible 
                    open={openSections.medicationDetails} 
                    onOpenChange={() => toggleSection('medicationDetails')}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-orange-100 border border-orange-200 rounded-lg hover:bg-orange-200 transition-colors">
                      <div className="flex items-center gap-3">
                        <Pill className="h-5 w-5 text-orange-600" />
                        <span className="font-medium text-orange-800">📋 Detailed Medication Comparison</span>
                      </div>
                      {openSections.medicationDetails ? 
                        <ChevronDown className="h-4 w-4 text-orange-600" /> : 
                        <ChevronRight className="h-4 w-4 text-orange-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-gray-700 mb-6">
                        All three medications are highly effective against pinworms. Choice often depends on availability, 
                        age, and regional preferences.
                      </p>

                      {/* Medication Cards */}
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Mebendazole</h4>
                          <Badge className="mb-3 bg-blue-100 text-blue-800">First-line treatment</Badge>
                          <div className="space-y-2 text-sm">
                            <p><strong>How it works:</strong> Blocks glucose uptake in worms</p>
                            <p><strong>Duration in body:</strong> 2-6 hours active</p>
                            <p><strong>Dosage:</strong> 100mg, repeat in 14 days</p>
                            <p><strong>Availability:</strong> Prescription in most countries</p>
                            <p><strong>Food:</strong> Can be taken with or without food</p>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">Albendazole</h4>
                          <Badge className="mb-3 bg-green-100 text-green-800">Alternative option</Badge>
                          <div className="space-y-2 text-sm">
                            <p><strong>How it works:</strong> Disrupts cellular structure in worms</p>
                            <p><strong>Duration in body:</strong> 8-12 hours active</p>
                            <p><strong>Dosage:</strong> 400mg, repeat in 14 days</p>
                            <p><strong>Availability:</strong> Prescription required</p>
                            <p><strong>Food:</strong> Better absorption with fatty meal</p>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-800 mb-2">Pyrantel Pamoate</h4>
                          <Badge className="mb-3 bg-orange-100 text-orange-800">Over-the-counter</Badge>
                          <div className="space-y-2 text-sm">
                            <p><strong>How it works:</strong> Paralyzes worm muscles</p>
                            <p><strong>Duration in body:</strong> 24-48 hours active</p>
                            <p><strong>Dosage:</strong> 11mg/kg, repeat in 14 days</p>
                            <p><strong>Availability:</strong> OTC in many countries</p>
                            <p><strong>Food:</strong> Can be taken with or without food</p>
                          </div>
                        </div>
                      </div>

                      {/* International Treatment Protocols */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 International Treatment Protocols</h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Standard Protocol (Most Countries)</h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>Day 0:</strong> First dose</li>
                              <li>• <strong>Day 14:</strong> Second dose</li>
                              <li>• Continue hygiene for 1 more week</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">Regional Variations</h5>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>UK/Australia:</strong> Single dose often sufficient</li>
                              <li>• <strong>USA:</strong> Pyrantel pamoate commonly used (OTC)</li>
                              <li>• <strong>WHO Guidelines:</strong> Albendazole for mass treatment</li>
                              <li>• <strong>Canada:</strong> Mebendazole preferred, 2-dose standard</li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h5 className="font-semibold text-blue-800 mb-2">Extended Protocol (Some Countries)</h5>
                          <p className="text-sm text-blue-700 mb-3">
                            In some countries such as Denmark, a third dose may be administered 2 weeks after the second dose (Day 28) to address potential reinfection cycles.
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-white p-3 rounded border">
                              <div className="font-semibold text-blue-800">Day 0</div>
                              <div className="text-sm text-gray-600">First dose</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <div className="font-semibold text-blue-800">Day 14</div>
                              <div className="text-sm text-gray-600">Second dose</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <div className="font-semibold text-blue-800">Day 28</div>
                              <div className="text-sm text-gray-600">Third dose</div>
                            </div>
                          </div>
                          <p className="text-xs text-blue-600 mt-3">
                            <strong>Rationale:</strong> The third dose addresses potential reinfection cycles and ensures complete elimination.
                          </p>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h5>
                          <ul className="space-y-1 text-sm text-yellow-700">
                            <li>• Always follow your healthcare provider's specific instructions</li>
                            <li>• Regional differences exist in treatment approaches</li>
                            <li>• Discuss extended treatment with healthcare provider if reinfection occurs</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          {/* Family Life Section - Age-specific design matching original */}
          <TabsContent value="family">
            <div className="space-y-6">
              {/* Managing Young Children */}
              <SectionCard className="border-blue-200 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <Baby className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Managing Young Children</h2>
                </div>

                <CollapsibleSection
                  title="Daily Routines for Little Ones"
                  icon={Clock}
                  isOpen={openSections.childRoutines}
                  onToggle={() => toggleSection('childRoutines')}
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Morning Routine:</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• Shower or thorough wash (not bath) to remove overnight eggs</li>
                        <li>• Change underwear and pajamas immediately</li>
                        <li>• Trim and scrub fingernails weekly</li>
                        <li>• Supervise hand washing before eating</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Childcare and Preschool:</h4>
                      <ul className="space-y-1 text-gray-700 ml-4">
                        <li>• Continue normal attendance - pinworms are extremely common</li>
                        <li>• Inform caregivers if required by facility policy</li>
                        <li>• Pack individual snacks and drinks</li>
                        <li>• Emphasize hand washing before eating</li>
                      </ul>
                    </div>

                    <CollapsibleSection
                      title="Special Considerations"
                      isOpen={openSections.childSpecial}
                      onToggle={() => toggleSection('childSpecial')}
                    >
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Potty training:</strong> Continue normal training with extra hand washing emphasis</p>
                        <p><strong>Thumb sucking:</strong> Extra vigilance about hand and pacifier cleanliness</p>
                        <p><strong>Toy sharing:</strong> Clean frequently handled toys daily</p>
                        <p><strong>Bath time:</strong> Individual baths only, clean tub between children</p>
                      </div>
                    </CollapsibleSection>
                  </div>
                </CollapsibleSection>
              </SectionCard>

              {/* Teenagers */}
              <SectionCard className="border-purple-200 bg-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-bold text-purple-800">Teenagers: Unique Considerations</h2>
                </div>

                <CollapsibleSection
                  title="Privacy and Independence"
                  isOpen={openSections.teenPrivacy}
                  onToggle={() => toggleSection('teenPrivacy')}
                >
                  <div className="space-y-3 text-gray-700">
                    <p>Teenagers need age-appropriate information and respect for their developing independence while ensuring treatment compliance.</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Explain the medical facts clearly and scientifically</li>
                      <li>• Emphasize that pinworms are common and not a reflection of cleanliness</li>
                      <li>• Allow them to manage their own hygiene routine with guidance</li>
                      <li>• Respect their need for privacy while ensuring medication compliance</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection
                  title="Social Life Management"
                  isOpen={openSections.teenSocial}
                  onToggle={() => toggleSection('teenSocial')}
                >
                  <div className="space-y-3 text-gray-700">
                    <p>Help teenagers navigate social situations without unnecessary anxiety or isolation.</p>
                    <ul className="space-y-2 ml-4">
                      <li>• School attendance continues normally</li>
                      <li>• Sports and activities can continue with good hygiene</li>
                      <li>• Sleepovers require extra hygiene awareness</li>
                      <li>• Dating relationships need honest, age-appropriate communication</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </SectionCard>

              {/* Household Management */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-6 w-6 text-gray-600" />
                  <h2 className="text-xl font-bold text-gray-800">Household Management</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Daily Cleaning Protocol</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Focus on high-touch surfaces (doorknobs, light switches, toilet handles)</li>
                      <li>• Use regular household cleaners with soap and water</li>
                      <li>• Vacuum carpets and mop floors regularly</li>
                      <li>• Individual towels and washcloths for each family member</li>
                      <li>• Daily laundry for underwear, pajamas, and towels</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Extended Family Considerations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inform close family members who have regular contact</li>
                      <li>• Grandparents and caregivers should follow same hygiene measures</li>
                      <li>• Consider treatment for household members even without symptoms</li>
                      <li>• Maintain normal family gatherings with enhanced hygiene awareness</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✅ Remember: Normal Family Life Continues</h3>
                  <p className="text-green-700">
                    Pinworms are extremely common and easily treatable. Focus on good hygiene practices rather than 
                    isolation or excessive cleaning. Most family activities can continue normally with awareness and 
                    proper precautions.
                  </p>
                </div>
              </SectionCard>
            </div>
          </TabsContent>

          {/* Intimacy Section - Clean design with proper warnings */}
          <TabsContent value="intimacy">
            <AdultContentWarning>
              <SectionCard className="border-pink-200 bg-pink-50">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-pink-600" />
                  <h2 className="text-xl font-bold text-pink-800">Adult Intimacy Guidelines</h2>
                  <Badge variant="secondary">Adults Only</Badge>
                </div>

                {/* Summary Statement */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Physical intimacy can continue during treatment with awareness of transmission routes.
                    </p>
                  </div>
                </div>

                {/* Side-by-side Safe vs High-Risk */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">Safe Activities:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Kissing (all types) - when avoiding anal area</li>
                      <li>• Oral sex to genitals only - with no anal contact</li>
                      <li>• Vaginal intercourse - ensuring no anal-to-vaginal contact</li>
                      <li>• Manual stimulation - with thoroughly washed hands</li>
                      <li>• Body contact and massage - avoiding anal area</li>
                      <li>• Shared bathing - without mouth-to-anal contact</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4">High-Risk Activities to Avoid:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Oral-anal contact - direct transmission route</li>
                      <li>• Any anal contact followed by oral/vaginal contact</li>
                      <li>• Touching anal area then mouth/genitals without washing</li>
                      <li>• Sharing unwashed items that contacted anal area</li>
                    </ul>
                  </div>
                </div>

                <CollapsibleSection
                  title="Practical Guidelines for Couples"
                  isOpen={openSections.coupleGuidelines}
                  onToggle={() => toggleSection('coupleGuidelines')}
                >
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Communication and Planning</h4>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• Discuss the situation openly and without shame</li>
                        <li>• Plan intimate activities with hygiene considerations</li>
                        <li>• Both partners should understand transmission routes</li>
                        <li>• Consider timing around medication doses and hygiene routines</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Hygiene Practices</h4>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• Shower before intimate contact when possible</li>
                        <li>• Wash hands thoroughly before and after contact</li>
                        <li>• Keep fingernails short and clean</li>
                        <li>• Consider showering together as part of foreplay</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Long-term Relationship Considerations</h4>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• Treatment period is typically 2-4 weeks</li>
                        <li>• Both partners should take medication simultaneously</li>
                        <li>• Normal intimacy resumes after successful treatment</li>
                        <li>• Focus on emotional connection during treatment period</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">💙 Relationship Support</h3>
                  <p className="text-blue-700">
                    Remember that pinworms are a common, temporary medical condition. With proper communication, 
                    hygiene awareness, and treatment compliance, couples can maintain intimacy while ensuring 
                    successful treatment for both partners.
                  </p>
                </div>
              </SectionCard>
            </AdultContentWarning>
          </TabsContent>

          {/* Activities Section - Card-based layout matching original */}
          <TabsContent value="activities">
            <div className="space-y-6">
              {/* Work and Social Life */}
              <SectionCard className="border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Work and Social Life</h2>
                </div>

                <CollapsibleSection
                  title="Workplace Guidelines"
                  isOpen={openSections.workplace}
                  onToggle={() => toggleSection('workplace')}
                >
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">✅ Continue Normal Work</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Pinworms are not a reason to miss work</li>
                        <li>• No need to inform employers or colleagues</li>
                        <li>• Maintain professional hygiene standards</li>
                        <li>• Wash hands frequently, especially before eating</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Special Considerations by Profession:</h4>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li><strong>Food Service:</strong> Extra hand washing, follow standard food safety protocols</li>
                        <li><strong>Healthcare:</strong> Standard precautions, no additional measures needed</li>
                        <li><strong>Childcare:</strong> Enhanced hygiene awareness, normal attendance</li>
                        <li><strong>Office Work:</strong> Regular hand washing, clean shared surfaces</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection
                  title="Social Situations"
                  isOpen={openSections.social}
                  onToggle={() => toggleSection('social')}
                >
                  <div className="space-y-3 text-gray-700">
                    <p>Social activities can continue normally with basic hygiene awareness.</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Dining out: Normal activities, wash hands before eating</li>
                      <li>• Parties and gatherings: Participate normally, avoid sharing personal items</li>
                      <li>• Dating: Be honest with close partners, maintain good hygiene</li>
                      <li>• Travel: Pack extra underwear, maintain hygiene routine</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </SectionCard>

              {/* Sports and Physical Activities */}
              <SectionCard className="border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-green-600" />
                  <h2 className="text-xl font-bold text-green-800">Sports and Physical Activities</h2>
                </div>

                <CollapsibleSection
                  title="Swimming and Water Activities"
                  isOpen={openSections.swimming}
                  onToggle={() => toggleSection('swimming')}
                >
                  <div className="space-y-3 text-gray-700">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="font-medium text-green-800">✅ Swimming is generally safe and can continue normally.</p>
                    </div>
                    <ul className="space-y-2 ml-4">
                      <li>• Chlorinated pools are safe - chlorine kills pinworm eggs</li>
                      <li>• Shower before and after swimming</li>
                      <li>• Change out of wet swimwear promptly</li>
                      <li>• Avoid swallowing pool water (general good practice)</li>
                      <li>• Ocean and lake swimming: normal precautions apply</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection
                  title="Team Sports and Fitness"
                  isOpen={openSections.teamSports}
                  onToggle={() => toggleSection('teamSports')}
                >
                  <div className="space-y-3 text-gray-700">
                    <p>Most sports and fitness activities can continue with enhanced hygiene awareness.</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Gym workouts: Wipe down equipment, shower after exercise</li>
                      <li>• Team sports: Normal participation, avoid sharing water bottles</li>
                      <li>• Martial arts: Enhanced hygiene, shower immediately after contact sports</li>
                      <li>• Yoga/Pilates: Bring your own mat, wash hands before and after</li>
                      <li>• Running/Cycling: Normal activities, shower after sweating</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </SectionCard>

              {/* Travel and Recreation */}
              <SectionCard className="border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-bold text-purple-800">Travel and Recreation</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Travel Considerations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pack extra underwear and pajamas</li>
                      <li>• Bring hand soap and maintain hygiene routine</li>
                      <li>• Consider timing medication doses with travel schedule</li>
                      <li>• Hotel stays: request fresh linens, maintain personal hygiene</li>
                      <li>• Camping: extra attention to hand washing and clean water access</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">✈️ Travel Tips</h3>
                    <p className="text-blue-700">
                      Pinworms should not prevent travel plans. With proper hygiene supplies and routine maintenance, 
                      you can travel normally while completing treatment.
                    </p>
                  </div>
                </div>
              </SectionCard>
            </div>
          </TabsContent>

          {/* Natural Approaches Section */}
          <TabsContent value="natural">
            <div className="space-y-6">
              <SectionCard className="border-green-200 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <h2 className="text-xl font-bold text-green-800">Natural and Complementary Approaches</h2>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <p className="text-yellow-800 font-medium">
                      Natural approaches can support treatment but should not replace proven medical therapy.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">🥗 Dietary Support</h3>
                    <div className="space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Immune-Supporting Foods</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Garlic and onions (antimicrobial properties)</li>
                          <li>• Pumpkin seeds (traditional antiparasitic)</li>
                          <li>• Probiotic foods (yogurt, kefir, fermented vegetables)</li>
                          <li>• High-fiber foods (support digestive health)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Foods to Limit</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Excessive refined sugars</li>
                          <li>• Processed foods</li>
                          <li>• Foods that may irritate digestion</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">🌿 Herbal Considerations</h3>
                    <div className="space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Traditional Herbs</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Wormwood (traditional use, consult practitioner)</li>
                          <li>• Black walnut (limited evidence)</li>
                          <li>• Cloves (antimicrobial properties)</li>
                          <li>• Oregano oil (general antimicrobial)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-800 mb-2">⚠️ Important Notes</h4>
                        <ul className="space-y-1 text-red-700 text-sm">
                          <li>• Consult healthcare provider before use</li>
                          <li>• May interact with medications</li>
                          <li>• Not recommended as sole treatment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-4">🧘 Lifestyle and Wellness Support</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Stress Management</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Regular sleep schedule</li>
                        <li>• Stress reduction techniques</li>
                        <li>• Moderate exercise</li>
                        <li>• Mindfulness practices</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Digestive Health</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Stay well-hydrated</li>
                        <li>• Regular meal timing</li>
                        <li>• Gentle movement after meals</li>
                        <li>• Avoid digestive irritants</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Immune Support</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Adequate sleep (7-9 hours)</li>
                        <li>• Regular physical activity</li>
                        <li>• Balanced nutrition</li>
                        <li>• Limit alcohol and smoking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🎯 Evidence-Based Approach</h3>
                  <p className="text-blue-700">
                    While natural approaches can support overall health during treatment, proven antiparasitic 
                    medications remain the most effective treatment for pinworms. Use complementary approaches 
                    alongside, not instead of, medical treatment.
                  </p>
                </div>
              </SectionCard>
            </div>
          </TabsContent>

          {/* Guidelines Section - Timeline and medical info matching original */}
          <TabsContent value="guidelines">
            <div className="space-y-6">
              {/* DO/DON'T Section matching original design */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">DO</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• Maintain normal life activities with enhanced hygiene</li>
                    <li>• Treat entire household simultaneously</li>
                    <li>• Take both medication doses as prescribed</li>
                    <li>• Shower daily (especially mornings)</li>
                    <li>• Change underwear twice daily during infection</li>
                    <li>• Wash hands frequently with soap for 20 seconds</li>
                    <li>• Keep fingernails short and clean</li>
                    <li>• Use hot water (60°C/140°F) for washing</li>
                    <li>• Clean high-touch surfaces daily</li>
                    <li>• Communicate openly with family</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">DON'T</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• Panic or unnecessarily isolate</li>
                    <li>• Skip the second medication dose</li>
                    <li>• Share towels, washcloths, or underwear</li>
                    <li>• Shake bedding before washing</li>
                    <li>• Rely on hand sanitizer alone</li>
                    <li>• Bite nails or touch mouth after contamination</li>
                    <li>• Prepare food for others during active infection</li>
                    <li>• Feel ashamed - this affects millions worldwide</li>
                  </ul>
                </div>
              </div>

              {/* When to Seek Medical Attention */}
              <SectionCard className="border-yellow-200 bg-yellow-50">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <h2 className="text-xl font-bold text-yellow-800">When to Seek Medical Attention</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-3">Contact Healthcare Provider If:</h3>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• Symptoms persist after completing both medication doses</li>
                      <li>• Signs of secondary bacterial infection (redness, swelling, pus)</li>
                      <li>• Severe abdominal pain or persistent digestive symptoms</li>
                      <li>• Multiple reinfections despite proper treatment</li>
                      <li>• Allergic reactions to medication</li>
                    </ul>
                  </div>

                  <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-3">Emergency Situations (Rare):</h3>
                    <ul className="space-y-1 text-red-700">
                      <li>• Severe allergic reaction to medication</li>
                      <li>• Signs of appendicitis (severe abdominal pain, fever, vomiting)</li>
                      <li>• High fever with severe abdominal symptoms</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              {/* Timeline and Expectations - Restored from original */}
              <SectionCard className="border-blue-200 bg-blue-50">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Timeline and Expectations</h2>
                </div>

                {/* Treatment Timeline Cards */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">Week 1</h3>
                    <p className="text-sm text-gray-600">
                      Begin hygiene measures, start medication, environmental cleaning
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">Week 2</h3>
                    <p className="text-sm text-gray-600">
                      Continue protocol, prepare for second dose
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">Week 3</h3>
                    <p className="text-sm text-gray-600">
                      Take second dose, maintain prevention measures
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">Week 4</h3>
                    <p className="text-sm text-gray-600">
                      Monitor for reinfection, gradually relax measures
                    </p>
                  </div>
                </div>

                {/* Success Indicators */}
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-4">Success Indicators:</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• No visible worms around anal area at night</li>
                    <li>• Reduced or eliminated itching</li>
                    <li>• Improved sleep quality</li>
                    <li>• No new symptoms in household members</li>
                  </ul>
                </div>
              </SectionCard>
            </div>
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
              Last updated: 2024 | For educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

