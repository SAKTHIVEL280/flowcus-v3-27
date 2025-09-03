
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Users, Lock, Globe, Timer, Coffee, BookOpen, Brain, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

// Sample data for demonstration
const sampleRooms = [
  {
    id: "1",
    name: "Study Group - Computer Science",
    description: "Preparing for final exams in algorithms and data structures",
    participants: 12,
    maxParticipants: 20,
    isPublic: true,
    category: "Academic",
    duration: "2h 30m",
    creator: "Alice Johnson",
    tags: ["CS", "Algorithms", "Finals"]
  },
  {
    id: "2",
    name: "Morning Focus Session",
    description: "Early bird productivity session for deep work",
    participants: 8,
    maxParticipants: 15,
    isPublic: true,
    category: "Productivity",
    duration: "1h 45m",
    creator: "Mike Chen",
    tags: ["Morning", "Deep Work", "Productivity"]
  },
  {
    id: "3",
    name: "Language Learning Circle",
    description: "Practicing Spanish conversation and grammar",
    participants: 6,
    maxParticipants: 10,
    isPublic: true,
    category: "Language",
    duration: "1h 15m",
    creator: "Sofia Rodriguez",
    tags: ["Spanish", "Conversation", "Grammar"]
  }
];

const categories = ["Academic", "Productivity", "Language", "Creative", "Professional"];

const FocusRoom = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [activeTab, setActiveTab] = useState("browse");
  const [joinCode, setJoinCode] = useState("");
  const [joinPassword, setJoinPassword] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomCategory, setRoomCategory] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("10");
  const [isPrivate, setIsPrivate] = useState(false);
  const [roomPassword, setRoomPassword] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("flowcus-theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      localStorage.setItem("flowcus-theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("flowcus-theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const handleJoinRoom = () => {
    // Mock join functionality
    console.log("Joining room with code:", joinCode);
    setActiveTab("session");
  };

  const handleCreateRoom = () => {
    // Mock create functionality
    console.log("Creating room:", { roomName, roomDescription, roomCategory, isPrivate });
    setActiveTab("session");
  };

  const handleJoinPublicRoom = (room) => {
    setSelectedRoom(room);
    setActiveTab("session");
  };

  if (activeTab === "session") {
    return (
      <div className={`min-h-screen bg-background transition-all duration-500 ${isDarkTheme ? 'dark' : ''}`} style={{ cursor: 'none' }}>
        <Navbar isDarkTheme={isDarkTheme} onThemeToggle={toggleTheme} />
        
        <main className="relative z-10 pt-24">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-paper rounded-3xl p-8 border-2 border-paper-lines shadow-float"
            >
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-arkhip text-3xl font-bold text-pencil-graphite">
                  {selectedRoom ? selectedRoom.name : roomName || "Focus Session"}
                </h1>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("browse")}
                  className="font-kalam cursor-target"
                >
                  Leave Room
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className="h-96 bg-card/50 backdrop-blur-sm border-paper-lines">
                    <CardHeader>
                      <CardTitle className="font-arkhip flex items-center gap-2">
                        <Timer className="h-5 w-5" />
                        Active Session
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-64">
                      <div className="text-center space-y-4">
                        <div className="text-5xl sm:text-6xl font-mono text-primary whitespace-nowrap">25:00</div>
                        <p className="text-muted-foreground font-kalam">Focus time remaining</p>
                        <Button className="font-kalam cursor-target">Start Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-paper-lines">
                    <CardHeader>
                      <CardTitle className="font-arkhip flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Participants ({selectedRoom?.participants || 1})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                            A
                          </div>
                          <span className="font-kalam">{selectedRoom?.creator || "You"}</span>
                          <Badge variant="secondary">Host</Badge>
                        </div>
                        {selectedRoom && Array.from({ length: selectedRoom.participants - 1 }).map((_, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">
                              {String.fromCharCode(66 + i)}
                            </div>
                            <span className="font-kalam">User {i + 2}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-paper-lines">
                    <CardHeader>
                      <CardTitle className="font-arkhip">Room Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="font-kalam">
                        <strong>Category:</strong> {selectedRoom?.category || roomCategory}
                      </div>
                      <div className="font-kalam">
                        <strong>Duration:</strong> {selectedRoom?.duration || "25 minutes"}
                      </div>
                      <div className="font-kalam">
                        <strong>Type:</strong> {isPrivate ? "Private" : "Public"}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background transition-all duration-500 ${isDarkTheme ? 'dark' : ''}`} style={{ cursor: 'none' }}>
      <Navbar isDarkTheme={isDarkTheme} onThemeToggle={toggleTheme} />
      
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-8"
          >
            <h1 className="font-arkhip text-4xl md:text-6xl font-bold text-pencil-graphite">
              Focus Rooms
            </h1>
            <p className="font-kalam text-lg text-muted-foreground max-w-2xl mx-auto">
              Join virtual study sessions, create focus groups, and stay productive with others
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            {/* Mobile-friendly tabs redesign */}
            <div className="block sm:hidden mb-8">
              <div className="bg-gradient-paper border-2 border-paper-lines rounded-2xl p-2 shadow-paper">
                <div className="flex flex-col gap-2">
                  {[
                    { value: "browse", label: "Browse", icon: "🔍" },
                    { value: "join", label: "Join Code", icon: "🔗" },
                    { value: "create", label: "Create", icon: "➕" }
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={cn(
                        "cursor-target w-full px-4 py-3 rounded-xl font-kalam font-medium transition-all duration-300",
                        "flex items-center justify-center gap-2 border",
                        activeTab === tab.value
                          ? "bg-pencil-blue text-white border-pencil-blue shadow-paper"
                          : "bg-card/50 text-foreground border-paper-lines/30 hover:bg-paper-cream hover:border-pencil-blue/50"
                      )}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop tabs */}
            <TabsList className="hidden sm:grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="browse" className="font-kalam cursor-target">Browse Rooms</TabsTrigger>
              <TabsTrigger value="join" className="font-kalam cursor-target">Join with Code</TabsTrigger>
              <TabsTrigger value="create" className="font-kalam cursor-target">Create Room</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleRooms.map((room) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full bg-gradient-paper border-2 border-paper-lines shadow-float hover:shadow-float-hover transition-all duration-300 cursor-target">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-arkhip text-xl text-pencil-graphite">
                            {room.name}
                          </CardTitle>
                          <Globe className="h-5 w-5 text-green-500" />
                        </div>
                        <CardDescription className="font-kalam">
                          {room.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className="font-kalam">{room.participants}/{room.maxParticipants}</span>
                          </div>
                          <Badge variant="secondary" className="font-kalam">
                            {room.category}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {room.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs font-kalam">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="text-sm text-muted-foreground font-kalam">
                          Created by {room.creator} • {room.duration}
                        </div>

                        <Button 
                          className="w-full font-kalam cursor-target" 
                          onClick={() => handleJoinPublicRoom(room)}
                        >
                          Join Room
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="join" className="max-w-md mx-auto">
              <Card className="bg-gradient-paper border-2 border-paper-lines shadow-float">
                <CardHeader>
                  <CardTitle className="font-arkhip text-center">Join with Code</CardTitle>
                  <CardDescription className="font-kalam text-center">
                    Enter the room code to join a private session
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="joinCode" className="font-kalam">Room Code</Label>
                    <Input
                      id="joinCode"
                      placeholder="Enter 6-digit code"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value)}
                      className="text-center text-lg tracking-wider font-mono cursor-target"
                      maxLength={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="joinPassword" className="font-kalam">Password (if required)</Label>
                    <Input
                      id="joinPassword"
                      type="password"
                      placeholder="Enter room password"
                      value={joinPassword}
                      onChange={(e) => setJoinPassword(e.target.value)}
                      className="cursor-target"
                    />
                  </div>

                  <Button 
                    className="w-full font-kalam cursor-target" 
                    onClick={handleJoinRoom}
                    disabled={joinCode.length !== 6}
                  >
                    Join Room
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="create" className="max-w-2xl mx-auto">
              <Card className="bg-gradient-paper border-2 border-paper-lines shadow-float">
                <CardHeader>
                  <CardTitle className="font-arkhip text-center">Create New Room</CardTitle>
                  <CardDescription className="font-kalam text-center">
                    Set up your focus session for others to join
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomName" className="font-kalam">Room Name</Label>
                      <Input
                        id="roomName"
                        placeholder="My Study Session"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        className="cursor-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="font-kalam">Category</Label>
                      <Select value={roomCategory} onValueChange={setRoomCategory}>
                        <SelectTrigger className="cursor-target">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category} className="cursor-target">
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="font-kalam">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="What will you be working on?"
                      value={roomDescription}
                      onChange={(e) => setRoomDescription(e.target.value)}
                      rows={3}
                      className="cursor-target"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxParticipants" className="font-kalam">Max Participants</Label>
                      <Select value={maxParticipants} onValueChange={setMaxParticipants}>
                        <SelectTrigger className="cursor-target">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[5, 10, 15, 20, 25, 50].map((num) => (
                            <SelectItem key={num} value={num.toString()} className="cursor-target">
                              {num} participants
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-kalam">Room Privacy</Label>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="private"
                          checked={isPrivate}
                          onCheckedChange={setIsPrivate}
                        />
                        <Label htmlFor="private" className="font-kalam flex items-center gap-2 cursor-target">
                          {isPrivate ? <Lock className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                          {isPrivate ? "Private" : "Public"}
                        </Label>
                      </div>
                    </div>
                  </div>

                  {isPrivate && (
                    <div className="space-y-2">
                      <Label htmlFor="roomPassword" className="font-kalam">Room Password</Label>
                      <Input
                        id="roomPassword"
                        type="password"
                        placeholder="Set a password for your room"
                        value={roomPassword}
                        onChange={(e) => setRoomPassword(e.target.value)}
                        className="cursor-target"
                      />
                    </div>
                  )}

                  <Button 
                    className="w-full font-kalam cursor-target" 
                    onClick={handleCreateRoom}
                    disabled={!roomName || !roomCategory}
                  >
                    Create Room
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default FocusRoom;
