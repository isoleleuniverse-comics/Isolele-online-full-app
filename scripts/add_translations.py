#!/usr/bin/env python3
"""Add missing book translations for all 9 carousel slides"""

import re

# Read the current translations file
with open('/vercel/share/v0-project/lib/translations.ts', 'r') as f:
    content = f.read()

# Define new translations for all languages
new_translations = {
    'en': {
        'book_kufu_title': 'KUFU: The Crown Game',
        'book_kufu_desc': 'This is not just a card game. It is a ceremony. Gather your warriors. Build your kingdom. Outplay every opponent at the table. But to claim the crown there is only one way to win. You must raise your voice and speak the name of the king out loud.',
        'book_zattar_title': 'Zattar: The Prince of the Universe',
        'book_zattar_desc': 'When Destiny Refused Him One Kingdom, He Decided to Take Them All. Prince Zattar was born to inherit the throne of Bapindi. But when the Ancestors chose another, something inside him did not break. It ignited.',
        'book_zaiko_title': 'Zaiko: Last King of the Streets',
        'book_zaiko_desc': 'Born in North Kivu. Forged in Kinshasa. Zaiko was never meant to survive. But survival was never enough. In a world ruled by power, money, and fear, he rises from nothing.',
        'book_amara_title': 'Amara: Queen of the Seas',
        'book_amara_desc': 'Every pirate fears the ocean. Amara owns it. She is the Queen of the Seas. The most feared captain on every water in the world. No ship has outrun her. No king has outsmarted her. No army has stopped her fleet.',
        'cta_title': 'THE CHOSEN ONES',
        'cta_description': 'Isolele is a visionary universe born to restore the soul of African storytelling, a mythological empire where superheroes are chosen by destiny, kingdoms never forgotten, and ancestral power is alive in every page, every prophecy, every battle.',
    },
    'fr': {
        'book_kufu_title': 'KUFU: Le Jeu de la Couronne',
        'book_kufu_desc': 'Ce n\'est pas juste un jeu de cartes. C\'est une cérémonie. Rassemblez vos guerriers. Construisez votre royaume. Battez chaque adversaire à la table. Mais pour revendiquer la couronne, il n\'y a qu\'une seule façon de gagner. Vous devez lever la voix et prononcer le nom du roi à haute voix.',
        'book_zattar_title': 'Zattar: Le Prince de l\'Univers',
        'book_zattar_desc': 'Quand le Destin lui a refusé un royaume, il a décidé de les prendre tous. Le Prince Zattar était né pour hériter du trône de Bapindi. Mais quand les Ancêtres en ont choisi un autre, quelque chose en lui ne s\'est pas brisé. Cela l\'a enflammé.',
        'book_zaiko_title': 'Zaiko: Dernier Roi des Rues',
        'book_zaiko_desc': 'Né en Afrique du Nord. Forgé à Kinshasa. Zaiko n\'était jamais destiné à survivre. Mais la survie ne suffisait jamais. Dans un monde gouverné par le pouvoir, l\'argent et la peur, il s\'élève de rien.',
        'book_amara_title': 'Amara: Reine des Mers',
        'book_amara_desc': 'Tous les pirates craignent l\'océan. Amara le possède. Elle est la Reine des Mers. La capitaine la plus redoutée sur tous les océans du monde. Aucun navire ne l\'a dépassée. Aucun roi ne l\'a surpassée. Aucune armée n\'a arrêté sa flotte.',
        'cta_title': 'LES ÉLUS',
        'cta_description': 'Isolele est un univers visionnaire né pour restaurer l\'âme de la narration africaine, un empire mythologique où les superhéros sont choisis par le destin, les royaumes jamais oubliés, et le pouvoir ancestral vivant dans chaque page, chaque prophétie, chaque bataille.',
    },
}

# For each language section, add the missing translations
lines = content.split('\n')
output = []
i = 0

while i < len(lines):
    line = lines[i]
    output.append(line)
    
    # Check if this is a language section start
    if '  en: {' in line:
        lang = 'en'
    elif '  fr: {' in line:
        lang = 'fr'
    else:
        lang = None
    
    # If we found a language section, add missing translations
    if lang and lang in new_translations:
        # Find where the language block ends (the closing brace)
        j = i + 1
        while j < len(lines) and '}' not in lines[j]:
            output.append(lines[j])
            j += 1
        
        # Add new translations before the closing brace
        for key, value in new_translations[lang].items():
            # Check if this key already exists
            if not any(f"{key}:" in line for line in lines[i:j]):
                output.append(f'    {key}: "{value}",')
        
        i = j
    else:
        i += 1

# Write back
with open('/vercel/share/v0-project/lib/translations.ts', 'w') as f:
    f.write('\n'.join(output))

print("[v0] Successfully added missing book translations")
