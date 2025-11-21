import { CONFIG } from '../config.js';

export async function generateActivities(mbtiType) {
    const prompt = `
        You are a creative activity generator for MBTI personality types.
        Generate 4 unique, cozy, engaging activities for ${mbtiType.code} - ${mbtiType.name}.
        
        Context about this type:
        - Category: ${mbtiType.category}
        - Description: ${mbtiType.desc}
        
        For each activity provide:
        1. Catchy name (3-6 words)
        2. Engaging description (2-3 sentences)
        3. Simple step-by-step OR visual flow with emojis
        4. Suitable for: solo/pairs/small group/large group
        5. Time estimate (specific range)
        6. Energy level: low/moderate/high
        7. Vibe keywords: 2-4 words like "cozy", "creative", "social"
        8. Why it suits this type (1 sentence)
        
        Respond with ONLY valid JSON array, no markdown formatting.
        Example format:
        [
            {
                "id": "unique_id_1",
                "title": "Activity Name",
                "description": "Description...",
                "steps": ["Step 1", "Step 2"],
                "groupSize": "Solo",
                "time": "30-60 min",
                "energy": "Low",
                "vibe": ["Cozy", "Calm"],
                "reason": "Why it fits..."
            }
        ]
    `;

    try {
        const response = await fetch(`${CONFIG.API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            if (response.status === 429) {
                throw new Error('Rate limit reached. Please wait a minute and try again.');
            } else if (response.status === 403) {
                throw new Error('API key invalid or quota exceeded. Please check your API key.');
            } else if (response.status === 404) {
                throw new Error('API endpoint not found. The model may not be available.');
            } else {
                throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;

        // Clean up markdown code blocks if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const activities = JSON.parse(jsonStr);

        // Add IDs if missing
        return activities.map((act, index) => ({
            ...act,
            id: act.id || `act_${Date.now()}_${index}`
        }));

    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
}
