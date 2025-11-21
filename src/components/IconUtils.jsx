import React from 'react';
import {
    Heart,
    Sparkles,
    RefreshCw,
    Clock,
    Users,
    Zap,
    Palette,
    Activity,
    Wind,
    MessageCircle,
    Moon,
    Sun,
    Settings,
    ArrowLeft,
    Info,
    BookOpen,
    Brain,
    PenTool,
    Lightbulb,
    AlertTriangle,
    Repeat,
    Share2,
    Search
} from 'lucide-react';

export const IconUtils = {
    // Navigation & UI
    Back: (props) => <ArrowLeft {...props} />,
    Settings: (props) => <Settings {...props} />,
    Heart: (props) => <Heart {...props} />,
    Refresh: (props) => <RefreshCw {...props} />,
    Info: (props) => <Info {...props} />,
    Share: (props) => <Share2 {...props} />,
    Search: (props) => <Search {...props} />,

    // Theme
    Sun: (props) => <Sun {...props} />,
    Moon: (props) => <Moon {...props} />,

    // Activity Properties
    Time: (props) => <Clock {...props} />,
    Group: (props) => <Users {...props} />,
    Energy: (props) => <Zap {...props} />,

    // Flow Icons
    Before: (props) => <BookOpen {...props} />,
    During: (props) => <Brain {...props} />,
    After: (props) => <PenTool {...props} />,

    // Tips
    Tip: (props) => <Lightbulb {...props} />,
    Important: (props) => <AlertTriangle {...props} />,
    Variation: (props) => <Sparkles {...props} />,
    Alternative: (props) => <Repeat {...props} />,

    // Vibe/Category Mapping
    getIconForVibe: (vibe) => {
        const v = vibe.toLowerCase();
        if (v.includes('creative') || v.includes('art')) return <Palette size={16} />;
        if (v.includes('active') || v.includes('sport')) return <Activity size={16} />;
        if (v.includes('calm') || v.includes('relax')) return <Wind size={16} />;
        if (v.includes('social')) return <Users size={16} />;
        if (v.includes('intellectual') || v.includes('think')) return <Brain size={16} />;
        if (v.includes('intro') || v.includes('self')) return <MessageCircle size={16} />;
        return <Sparkles size={16} />;
    }
};
