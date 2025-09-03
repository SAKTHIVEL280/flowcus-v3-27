
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, PenTool, Pencil } from "lucide-react";

interface TimerSettingsProps {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
  isRunning: boolean;
  onFocusTimeChange: (value: number) => void;
  onShortBreakChange: (value: number) => void;
  onLongBreakChange: (value: number) => void;
  onSettingsSaved?: () => void;
}

export const TimerSettings: React.FC<TimerSettingsProps> = ({
  focusTime,
  shortBreak,
  longBreak,
  isRunning,
  onFocusTimeChange,
  onShortBreakChange,
  onLongBreakChange,
  onSettingsSaved,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [customFocus, setCustomFocus] = useState<string>(focusTime.toString());
  const [customShortBreak, setCustomShortBreak] = useState<string>(shortBreak.toString());
  const [customLongBreak, setCustomLongBreak] = useState<string>(longBreak.toString());
  const [focusError, setFocusError] = useState('');
  const [shortBreakError, setShortBreakError] = useState('');
  const [longBreakError, setLongBreakError] = useState('');

  const validateInput = (value: string, setValue: (val: string) => void, setError: (err: string) => void) => {
    if (value === '') {
      setError('');
      return;
    }
    
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 1 || numValue > 89) {
      setError('Please enter a value between 1 and 89 minutes');
    } else {
      setError('');
    }
  };

  const handleCustomSave = () => {
    let hasChanges = false;
    
    const focusValue = Number(customFocus);
    const shortBreakValue = Number(customShortBreak);
    const longBreakValue = Number(customLongBreak);
    
    if (customFocus && focusValue >= 1 && focusValue <= 89 && focusValue !== focusTime) {
      onFocusTimeChange(focusValue);
      hasChanges = true;
    }
    if (customShortBreak && shortBreakValue >= 1 && shortBreakValue <= 89 && shortBreakValue !== shortBreak) {
      onShortBreakChange(shortBreakValue);
      hasChanges = true;
    }
    if (customLongBreak && longBreakValue >= 1 && longBreakValue <= 89 && longBreakValue !== longBreak) {
      onLongBreakChange(longBreakValue);
      hasChanges = true;
    }
    
    // Close the dialog after saving
    setDialogOpen(false);
    
    // Notify parent component that settings were saved
    if (onSettingsSaved && hasChanges) {
      onSettingsSaved();
    }
  };

  return (
    <Card className="cursor-target bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-target hover:bg-card/50 transition-colors">
            <CardTitle className="flex items-center justify-between font-arkhip text-xl text-pencil-graphite">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Timer Settings
              </div>
              {isOpen ? (
                <PenTool className="w-5 h-5" />
              ) : (
                <Pencil className="w-5 h-5" />
              )}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-kalam text-sm font-medium text-pencil-graphite">
                  Focus Time: {focusTime} min
                </label>
                <Slider
                  value={[focusTime]}
                  onValueChange={([value]) => {
                    onFocusTimeChange(value);
                    if (onSettingsSaved) {
                      onSettingsSaved();
                    }
                  }}
                  min={15}
                  max={60}
                  step={5}
                  className="cursor-target"
                />
              </div>

              <div className="space-y-2">
                <label className="font-kalam text-sm font-medium text-pencil-graphite">
                  Short Break: {shortBreak} min
                </label>
                <Slider
                  value={[shortBreak]}
                  onValueChange={([value]) => {
                    onShortBreakChange(value);
                    if (onSettingsSaved) {
                      onSettingsSaved();
                    }
                  }}
                  min={3}
                  max={15}
                  step={1}
                  className="cursor-target"
                />
              </div>

              <div className="space-y-2">
                <label className="font-kalam text-sm font-medium text-pencil-graphite">
                  Long Break: {longBreak} min
                </label>
                <Slider
                  value={[longBreak]}
                  onValueChange={([value]) => {
                    onLongBreakChange(value);
                    if (onSettingsSaved) {
                      onSettingsSaved();
                    }
                  }}
                  min={10}
                  max={30}
                  step={5}
                  className="cursor-target"
                />
              </div>
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full cursor-target"
                  onClick={() => {
                    setCustomFocus(focusTime.toString());
                    setCustomShortBreak(shortBreak.toString());
                    setCustomLongBreak(longBreak.toString());
                    setFocusError('');
                    setShortBreakError('');
                    setLongBreakError('');
                  }}
                >
                  Customize Settings
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gradient-paper border-2 border-paper-lines">
                <DialogHeader>
                  <DialogTitle className="font-arkhip text-xl text-pencil-graphite">
                    Custom Timer Settings
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="focus-time" className="font-kalam text-sm font-medium text-pencil-graphite">
                      Focus Time (1-89 minutes)
                    </Label>
                    <Input
                      id="focus-time"
                      type="number"
                      min="1"
                      max="89"
                      value={customFocus}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCustomFocus(value);
                        validateInput(value, setCustomFocus, setFocusError);
                      }}
                      className="cursor-target bg-paper-cream border-paper-lines focus:border-pencil-blue [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                    {focusError && (
                      <p className="text-red-500 text-xs font-kalam">{focusError}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="short-break" className="font-kalam text-sm font-medium text-pencil-graphite">
                      Short Break (1-89 minutes)
                    </Label>
                    <Input
                      id="short-break"
                      type="number"
                      min="1"
                      max="89"
                      value={customShortBreak}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCustomShortBreak(value);
                        validateInput(value, setCustomShortBreak, setShortBreakError);
                      }}
                      className="cursor-target bg-paper-cream border-paper-lines focus:border-pencil-blue [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                    {shortBreakError && (
                      <p className="text-red-500 text-xs font-kalam">{shortBreakError}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="long-break" className="font-kalam text-sm font-medium text-pencil-graphite">
                      Long Break (1-89 minutes)
                    </Label>
                    <Input
                      id="long-break"
                      type="number"
                      min="1"
                      max="89"
                      value={customLongBreak}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCustomLongBreak(value);
                        validateInput(value, setCustomLongBreak, setLongBreakError);
                      }}
                      className="cursor-target bg-paper-cream border-paper-lines focus:border-pencil-blue [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    />
                    {longBreakError && (
                      <p className="text-red-500 text-xs font-kalam">{longBreakError}</p>
                    )}
                  </div>
                  <Button 
                    onClick={handleCustomSave}
                    className="w-full cursor-target"
                  >
                    Save Settings
                  </Button>
                  <p className="text-center text-sm text-muted-foreground font-kalam">
                    Click reset to change the time
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
